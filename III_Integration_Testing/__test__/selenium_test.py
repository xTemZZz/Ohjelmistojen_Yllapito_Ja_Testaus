import pytest
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.service import Service

def take_screenshot(driver, name):
    timestamp = int(time.time())
    filename = f"screenshot_{name}_{timestamp}.png"
    driver.save_screenshot(filename)
    print(f"Screenshot saved: {filename}")
    return filename

class TestRgbHexConverter:
    """Test suite for RGB-HEX Converter web application"""
    
    @pytest.fixture
    def driver(self):
        """Initialize Chrome driver for UI testing"""
        service = Service(ChromeDriverManager().install())
        options = webdriver.ChromeOptions()
        options.add_argument('--window-size=1920,1080')
        
        driver = webdriver.Chrome(service=service, options=options)
        driver.get("http://localhost:3000")
        time.sleep(1)  # Wait for page load
        yield driver
        driver.quit()
    
    def take_screenshot(self, driver, name):
        timestamp = int(time.time())
        filename = f"screenshot_{name}_{timestamp}.png"
        driver.save_screenshot(filename)
        return filename
    
    def test_hex_to_rgb_valid(self, driver):
        
        hex_input = driver.find_element(By.ID, "hex-input")
        hex_input.clear()
        hex_input.send_keys("#FF0000")
        
        convert_btn = driver.find_element(By.ID, "convert-hex-btn")
        convert_btn.click()
        
        time.sleep(1)
        
        result = driver.find_element(By.ID, "hex-result")
        assert "RGB: rgb(255, 0, 0)" in result.text
        
        preview = driver.find_element(By.ID, "hex-color-preview")
        assert preview.is_displayed()
        
        take_screenshot(driver, "hex_to_rgb_valid")
    
    def test_hex_to_rgb_no_hash(self, driver):
        hex_input = driver.find_element(By.ID, "hex-input")
        hex_input.clear()
        hex_input.send_keys("00FF00")
        
        convert_btn = driver.find_element(By.ID, "convert-hex-btn")
        convert_btn.click()
        time.sleep(1)
        
        result = driver.find_element(By.ID, "hex-result")
        assert "RGB: rgb(0, 255, 0)" in result.text

        take_screenshot(driver, "works_without_prefix")
    
    def test_hex_to_rgb_invalid(self, driver):
        hex_input = driver.find_element(By.ID, "hex-input")
        hex_input.clear()
        hex_input.send_keys("XYZ123")
        
        convert_btn = driver.find_element(By.ID, "convert-hex-btn")
        convert_btn.click()
        time.sleep(1)
        
        error = driver.find_element(By.ID, "hex-error")
        assert "Invalid HEX" in error.text

        take_screenshot(driver, "hex_to_rgb_invalid")
    
    def test_hex_to_rgb_clear(self, driver):

        hex_input = driver.find_element(By.ID, "hex-input")
        hex_input.send_keys("#FF0000")
        convert_btn = driver.find_element(By.ID, "convert-hex-btn")
        convert_btn.click()
        time.sleep(1)
        
        clear_btn = driver.find_element(By.ID, "clear-hex-btn")
        clear_btn.click()
        
        assert hex_input.get_attribute("value") == ""
        result = driver.find_element(By.ID, "hex-result")
        assert not result.is_displayed()

    def test_rgb_to_hex_valid(self, driver):
        red = driver.find_element(By.ID, "red-input")
        green = driver.find_element(By.ID, "green-input")
        blue = driver.find_element(By.ID, "blue-input")
        
        red.clear()
        red.send_keys("255")
        green.clear()
        green.send_keys("128")
        blue.clear()
        blue.send_keys("0")
        
        convert_btn = driver.find_element(By.ID, "convert-rgb-btn")
        convert_btn.click()
        time.sleep(1)
        
        result = driver.find_element(By.ID, "rgb-result")
        assert "HEX: #FF8000" in result.text
       
        take_screenshot(driver, "rgb_to_hex_valid")
    
    def test_rgb_to_hex_invalid_values(self, driver):
        red = driver.find_element(By.ID, "red-input")
        red.clear()
        red.send_keys("300")
        
        convert_btn = driver.find_element(By.ID, "convert-rgb-btn")
        convert_btn.click()
        time.sleep(1)
        
        error = driver.find_element(By.ID, "rgb-error")
        assert error.is_displayed()
        assert "Invalid RGB" in error.text

        take_screenshot(driver, "rgb_to_hex_invalid")
    
    def test_rgb_to_hex_clear(self, driver):
        driver.find_element(By.ID, "red-input").send_keys("255")
        driver.find_element(By.ID, "green-input").send_keys("255")
        driver.find_element(By.ID, "blue-input").send_keys("255")
        
        clear_btn = driver.find_element(By.ID, "clear-rgb-btn")
        clear_btn.click()
        
        assert driver.find_element(By.ID, "red-input").get_attribute("value") == ""
        assert driver.find_element(By.ID, "green-input").get_attribute("value") == ""
        assert driver.find_element(By.ID, "blue-input").get_attribute("value") == ""
    
    def test_hex_lowercase(self, driver):
        
        hex_input = driver.find_element(By.ID, "hex-input")
        hex_input.send_keys("#ff00ff")
        driver.find_element(By.ID, "convert-hex-btn").click()
        time.sleep(1)
        
        result = driver.find_element(By.ID, "hex-result")
        assert "RGB: rgb(255, 0, 255)" in result.text
        print("✓ Lowercase HEX works correctly")
    
    def test_rgb_black_and_white(self, driver):
        driver.find_element(By.ID, "red-input").send_keys("0")
        driver.find_element(By.ID, "green-input").send_keys("0")
        driver.find_element(By.ID, "blue-input").send_keys("0")
        driver.find_element(By.ID, "convert-rgb-btn").click()
        time.sleep(0.5)
        result = driver.find_element(By.ID, "rgb-result")
        assert "#000000" in result.text
        
        driver.find_element(By.ID, "clear-rgb-btn").click()
        driver.find_element(By.ID, "red-input").send_keys("255")
        driver.find_element(By.ID, "green-input").send_keys("255")
        driver.find_element(By.ID, "blue-input").send_keys("255")
        driver.find_element(By.ID, "convert-rgb-btn").click()
        time.sleep(0.5)
        assert "#FFFFFF" in driver.find_element(By.ID, "rgb-result").text
        

if __name__ == "__main__":
    pytest.main([__file__, "-v", "--tb=short"])