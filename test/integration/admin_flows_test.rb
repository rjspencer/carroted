require 'test_helper'

class AdminFlowsTest < ActionDispatch::IntegrationTest
  test "admin is redirected to login when accessing dashboard" do
    get "/behaviors/admin"
    assert redirect?
  end
end
