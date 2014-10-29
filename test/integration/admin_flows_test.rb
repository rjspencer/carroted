require 'test_helper'

class AdminFlowsTest < ActionDispatch::IntegrationTest
  test "unknown user is redirected to login when accessing dashboard" do
    get "/behaviors/admin"
    assert_redirected_to "/users/sign_in"
  end
end
