import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  debug: true,
  lng: "vi",
  resources: {
    en: {
      translation: {
        hello: "Hello",
        delivery_info_prefix: "We deliver to you every day from ",
        delivery_time: "7:00 to 23:00",
        english: "English",
        vietnamese: "Vietnamese",
        usd: "USD",
        eur: "EUR",
        vnd: "VND",
        home: "Home",
        home_sub_1: "Home Sub 1",
        home_sub_2: "Home Sub 2",
        shop: "Shop",
        all_products: "All Products",
        best_sellers: "Best Sellers",
        fruits_vegetables: "Fruits & Vegetables",
        beverages: "Beverages",
        blog: "Blog",
        contact: "Contact",
        trending_products: "Trending Products",
        hot_deals: "Hot Deals",
        new_arrivals: "New Arrivals",
        almost_finished: "Almost Finished",
        deliver_to: "Deliver to",
        all: "all",
        location_1: "Location 1",
        location_2: "Location 2",
        location_3: "Location 3",
        search_placeholder: "Search for products, categories or brands...",
        sign_in: "Sign In",
        account: "Account",
        my_account: "My Account",
        wishlist: "Wishlist",
        order_tracking: "Order Tracking",
        about_us: "About Us",
        shop_now: "Shop Now",
        limited_time_offer: "Don't miss this limited time offer.",
        banner_slide_1_badge_text: "Weekend Discount",
        banner_slide_1_title:
          "Get the best quality products at the lowest prices",
        banner_slide_1_description:
          "We have prepared special discounts for you on organic breakfast products.",
        banner_slide_2_badge_text: "New Product Launch",
        banner_slide_2_title: "Discover TeeChia Sustained Energy Cereal",
        banner_slide_2_description:
          "Fuel your day with organic superfoods. Packed with chia, quinoa, amaranth, flax, ranon, and pumpkin.",

        notFoundPage: {
          title: "Page not found",
          description: "The page you want to go is not currently available",
          homeButton: "Home Page",
          backButton: "Back",
        },

        footer: {
          copyright:
            "Copyright 2025 © Shopstore WooCommerce WordPress Theme. All right reserved. Powered by BlackRise Themes.",
          termsAndConditions: "Terms and Conditions",
          privacyPolicy: "Privacy Policy",
          orderTracking: "Order Tracking",
          appDownload: {
            title: "Download our app",
            googlePlayDiscount: "Download App Get -10% Discount",
            appStoreDiscount: "Download App Get -20% Discount",
          },
          newsletter: {
            title: "Join our newsletter for {{discount}} offs",
            description:
              "Register now to get latest updates on promotions & coupons. Don't worry, we not spam!",
            placeholder: "Enter your email address",
            sendButton: "SEND",
            termsLink: "Terms & Conditions",
            privacyLink: "Privacy & Cookies Policy",
          },
          socialMedia: {
            followUs: "Follow us on social media:",
            facebook: "Facebook",
            twitter: "Twitter",
            instagram: "Instagram",
            linkedin: "LinkedIn",
          },
          contactInfo: {
            helpTitle: "Do You Need Help ?",
            helpDescription:
              "Autoseligen syr. Nek diarask fröbomba. När antipol kynoda nyrat. Pressa fåmoska.",
            workingHoursLabel: "Working Hours",
            workingHoursValue: "Monday-Friday: 08am-9pm",
            orderHelpLabel: "Need help with your order?",
            email: "info@example.com",
          },
          linkLists: {
            makeMoney: {
              title: "Make Money with Us",
              sellOnGrogin: "Sell on Grogin",
              sellYourServices: "Sell Your Services on Grogin",
              sellOnGroginBusiness: "Sell on Grogin Business",
              sellYourAppsOnGrogin: "Sell Your Apps on Grogin",
              becomeAnAffiliate: "Become an Affiliate",
              advertiseYourProducts: "Advertise Your Products",
              sellPublishWithUs: "Sell-Publish with Us",
              becomeAnBlowwieVendor: "Become an Blowwie Vendor",
            },
            helpYou: {
              title: "Let Us Help You",
              accessibilityStatement: "Accessibility Statement",
              yourOrders: "Your Orders",
              returnsAndReplacements: "Returns & Replacements",
              shippingRatesAndPolicies: "Shipping Rates & Policies",
              refundAndReturnsPolicy: "Refund and Returns Policy",
              privacyPolicy: "Privacy Policy",
              termsAndConditions: "Terms and Conditions",
              cookieSettings: "Cookie Settings",
              helpCenter: "Help Center",
            },
            moreInfo: {
              title: "More Info",
            },
            getKnowUs: {
              title: "Get to Know Us",
              careersForGrogin: "Careers for Grogin",
              aboutGrogin: "About Grogin",
              investorRelations: "Investor Relations",
              groginDevices: "Grogin Devices",
              customerReviews: "Customer reviews",
              socialResponsibility: "Social Responsibility",
              storeLocations: "Store Locations",
            },
          },
        },
        cartPage: {
          continueShoppingButton: "Continue Shopping",
          product_list_title: "Products",
        },
        cartEmptyState: {
          title: "YOUR CART IS CURRENTLY EMPTY.",
          returnToShopButton: "Return to shop",
        },
        dealsOfTheDaySection: {
          title: "DEALS OF THE DAY",
          subtitle: "Don't miss out on these limited-time offers!",
        },
        featuredProductSection: {
          title: "Featured Products",
          subtitle: "Do not miss the current offers until the end of month.",
          freshFindsTitle: "Fresh Finds for Less.",
          freshFindsDescription:
            "Explore our selection of new arrivals that combine quality and affordability.",
        },
        topCategorySection: {
          title: "Top Categories",
          subtitle: "New products with updated stocks.",
        },
        viewAllButton: {
          text: "View all",
        },
        stockIndicator: {
          lowStockMessage: "This product is about to run out",
        },
        newProducts: {
          title: "NEW PRODUCTS",
          subtitle: "Some of the new products arriving this weeks",
        },
        newArrivals: {
          title: "New Arrivals",
          subtitle: "Some of the new products arriving this weeks",
          reviewComment:
            "Good quality product can only be found in good stores",
          news1: {
            title: "Where flavor meets affordability.",
            description: "Discover our delicious range of affordable ...",
          },
          news2: {
            title: "Fresh Finds for Less.",
            description:
              "Explore our selection of new arrivals that combine quality and affordability.",
          },
        },
        add_to_cart: "Add to cart",
        cart_summary_title: "Cart Summary",
        cart_subtotal: "Subtotal",
        cart_total: "Total",
        proceed_to_checkout: "Proceed to Checkout",
        pagination_previous: "Previous",
        pagination_next: "Next",
        min_price: "Min price",
        max_price: "Max price",
        show_label: "Show:",
        items_label: "items",
        showing_results:
          "Showing {{startIndex}}-{{endIndex}} of {{totalResults}} results",
        sort_label: "Sort:",
        no_matching_products: "No matching products found.",
        price_min_zero_error: "Min price must be ≥ 0.",
        price_max_zero_error: "Max price must be ≥ 0.",
        price_min_upper_limit_error:
          "Min price cannot exceed max limit ({{upperLimit}}).",
        price_max_upper_limit_error:
          "Max price cannot exceed max limit ({{upperLimit}}).",
        price_min_greater_than_max_error:
          "Min price cannot be greater than max price.",
        price_max_less_than_min_error:
          "Max price cannot be less than min price.",
        filterByStatus: {
          productStatus: "Product Status",
          inStock: "In Stock",
          onSale: "On Sale",
        },
        product_description_tab: "Description",
        product_reviews_tab: "Reviews",
        loading_reviews: "Loading reviews...",
        error_reviews: "Error: {{error}}",
        no_reviews_yet: "No reviews yet.",
        relatedProducts: {
          title: "Related Products",
          loading: "Loading related products...",
          error: "Error: {{error}}",
          noProductsFound: "No related products found.",
        },
        product: {
          notFoundOrLoading: "Product not found or loading...",
          loading: "Loading products...",
          error: "Error: {{error}}",
        },
        confirmItem: {
          paymentTitle: "Payment.",
          paymentDescription:
            "Payment upon receipt of goods, Payment by card in the department, Google Pay, Online card, -5% discount in case of payment",
          warrantyTitle: "Warranty.",
          warrantyDescription:
            "The Consumer Protection Act does not provide for the return of this product of proper quality.",
        },
        productActions: {
          addToWishlist: "Add to wishlist",
          shareProduct: "Share this Product",
          compare: "Compare",
        },
        productInfo: {
          orderOnWhatsApp: "Order on WhatsApp",
        },
        specialOffer: {
          title: "Special Offer :",
          remainingTime: "Remains until the end of the offer.",
        },
        product_actions: {
          add_to_cart: "Add to Cart",
          buy_now: "Buy now",
        },
        login_form: {
          account_prompt: "Don't have an account yet? Register now!",
          username_email_label: "Username or Email",
          password_label: "Password",
          remember_me: "Remember me",
          lost_password: "Lost your password?",
          log_in_button: "Log In",
          login_success_title: "Login Successful",
          login_success_message:
            "Welcome back {{username}}! Let's go shopping!",
          login_failure_title: "Login Failed",
          login_error_message: "An error occurred.",
          login_failed: "Login failed",
        },
        register_form: {
          advantages_text:
            "Register now to get all the advantages of our store!",
          username_label: "Username",
          email_label: "Email",
          password_label: "Password",
          customer_radio: "I am a customer",
          vendor_radio: "I am a vendor",
          privacy_policy_prefix:
            "Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our",
          privacy_policy_link: "privacy policy",
          register_success_title: "Registration Successful",
          register_success_message: "Welcome {{username}}!",
          register_failure_title: "Registration Failed",
          register_error_message: "An error occurred.",
        },
        validation: {
          username_min_length:
            "Tên người dùng hoặc email phải có ít nhất 6 ký tự.",
          password_min_length: "Mật khẩu phải có ít nhất 6 ký tự.",
          email_invalid: "Địa chỉ email không hợp lệ.",
          role_invalid: "Vai trò không hợp lệ.",
          validation_required_field: "Trường này là bắt buộc.",
          validation_invalid_email: "Địa chỉ email không hợp lệ.",
          validation_invalid_phone: "Số điện thoại không hợp lệ.",
          validation_invalid_zip_code: "Mã bưu điện không hợp lệ.",
        },
        shipping_options: {
          flat_rate: "Flat rate",
          local_pickup: "Local pickup",
        },
        auth: {
          login: "Login",
          register: "Register",
        },
        logout: {
          success_title: "Logout successfully!",
          success_message: "Your account have logged out!"
        },
        product_categories: "Product Categories",
        widget_price_filter: "Price filter",
        privacyConfirm: {
          personalData: "Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our",
          privacyPolicy: "privacy policy",
          agreeTerms: "I have read and agree to the website",
          termsAndConditions: "terms and conditions",
        },
        paymentMethods: {
          directBankTransfer: "Direct Bank Transfer",
          directBankTransferDescription: "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.",
          checkPayments: "Check Payments",
          cashOnDelivery: "Cash On Delivery",
        },
        freeShippingThreshold: {
          message: "Add {{amount}} to cart and get free shipping!",
        },
        your_order: "Your order",
        order_btn: "Đặt đơn",
        couponService: {
          couponNotFound: "Coupon code does not exist.",
          couponExpired: "Coupon code has expired.",
          minAmountRequired: "Order total must be at least {{amount}} to apply this coupon.",
          couponAppliedSuccessfully: "Coupon applied successfully!",
        },
        couponInput: {
          emptyCodeError: "Coupon code cannot be empty.",
          placeholder: "Coupon Code",
        },
        billing_details_title: "Billing Details",
        first_name: "First Name",
        last_name: "Last Name",
        company_name: "Company Name (Optional)",
        country_region: "Country / Region",
        street_address: "Street Address",
        house_number_street_name: "House number and street name",
        apartment_suite_optional: "Apartment, suite, unit, etc. (optional)",
        town_city: "Town / City",
        state: "State",
        zip_code: "Zip Code",
        phone: "Phone",
        email_address: "Email Address",
        create_an_account: "Create an account?",
        ship_to_a_different_address: "Ship to a different address?",
        order_notes: "Order notes",
        order_notes_placeholder: "Notes about your order, e.g. special notes for delivery.",
        product_name: "Product name",
      },
    },
    vi: {
      translation: {
        hello: "Xin chào",
        product: {
          notFoundOrLoading: "Sản phẩm không tồn tại hoặc đang được tải...",
          loading: "Đang tải sản phẩm...",
          error: "Lỗi: {{error}}",
        },
        confirmItem: {
          paymentTitle: "Thanh toán.",
          paymentDescription:
            "Thanh toán khi nhận hàng, Thanh toán bằng thẻ tại cửa hàng, Google Pay, Thẻ trực tuyến, -5% giảm giá khi thanh toán",
          warrantyTitle: "Bảo hành.",
          warrantyDescription:
            "Luật Bảo vệ Người tiêu dùng không quy định việc trả lại sản phẩm chất lượng tốt này.",
        },
        productActions: {
          addToWishlist: "Thêm vào danh sách yêu thích",
          shareProduct: "Chia sẻ sản phẩm này",
          compare: "So sánh",
        },
        productInfo: {
          orderOnWhatsApp: "Đặt hàng qua WhatsApp",
        },
        specialOffer: {
          title: "Ưu đãi đặc biệt :",
          remainingTime: "Còn lại cho đến khi kết thúc ưu đãi.",
        },
        filterByStatus: {
          productStatus: "Trạng thái sản phẩm",
          inStock: "Còn hàng",
          onSale: "Đang giảm giá",
        },
        product_description_tab: "Mô tả",
        product_reviews_tab: "Đánh giá",
        loading_reviews: "Đang tải đánh giá...",
        error_reviews: "Lỗi: {{error}}",
        no_reviews_yet: "Chưa có đánh giá nào.",
        relatedProducts: {
          title: "Sản phẩm liên quan",
          loading: "Đang tải sản phẩm liên quan...",
          error: "Lỗi: {{error}}",
          noProductsFound: "Không tìm thấy sản phẩm liên quan.",
        },
        about_us: "Về chúng tôi",
        my_account: "Tài khoản của tôi",
        wishlist: "Danh sách yêu thích",
        order_tracking: "Theo dõi đơn hàng",
        delivery_info_prefix: "Chúng tôi giao hàng cho bạn mỗi ngày từ ",
        delivery_time: "7:00 đến 23:00",
        english: "Tiếng Anh",
        vietnamese: "Tiếng Việt",
        usd: "USD",
        eur: "EUR",
        vnd: "VND",
        home: "Trang chủ",
        home_sub_1: "Trang chủ phụ 1",
        home_sub_2: "Trang chủ phụ 2",
        shop: "Cửa hàng",
        all_products: "Tất cả sản phẩm",
        best_sellers: "Bán chạy nhất",
        fruits_vegetables: "Trái cây & Rau củ",
        beverages: "Đồ uống",
        blog: "Blog",
        contact: "Liên hệ",
        trending_products: "Sản phẩm thịnh hành",
        hot_deals: "Ưu đãi hot",
        new_arrivals: "Hàng mới về",
        almost_finished: "Gần hết hàng",
        deliver_to: "Giao đến",
        all: "tất cả",
        location_1: "Địa điểm 1",
        location_2: "Địa điểm 2",
        location_3: "Địa điểm 3",
        search_placeholder: "Tìm kiếm sản phẩm, danh mục hoặc thương hiệu...",
        sign_in: "Đăng nhập",
        account: "Tài khoản",
        shop_now: "Mua ngay",
        limited_time_offer: "Đừng bỏ lỡ ưu đãi có hạn này.",
        banner_slide_1_badge_text: "Giảm giá cuối tuần",
        banner_slide_1_title:
          "Nhận sản phẩm chất lượng tốt nhất với giá thấp nhất",
        banner_slide_1_description:
          "Chúng tôi đã chuẩn bị các chương trình giảm giá đặc biệt dành cho bạn đối với các sản phẩm bữa sáng hữu cơ.",
        banner_slide_2_badge_text: "Ra mắt sản phẩm mới",
        banner_slide_2_title: "Khám phá Ngũ cốc năng lượng bền vững TeeChia",
        banner_slide_2_description:
          "Tiếp năng lượng cho ngày của bạn với siêu thực phẩm hữu cơ. Đóng gói với hạt chia, quinoa, amaranth, hạt lanh, ranon và bí ngô.",

        notFoundPage: {
          title: "Không tìm thấy trang",
          description: "Trang bạn muốn đến hiện không có sẵn",
          homeButton: "Trang chủ",
          backButton: "Quay lại",
        },

        footer: {
          copyright:
            "Bản quyền 2025 © Chủ đề WooCommerce WordPress Shopstore. Đã bảo lưu mọi quyền. Được cung cấp bởi BlackRise Themes.",
          termsAndConditions: "Điều khoản và Điều kiện",
          privacyPolicy: "Chính sách bảo mật",
          orderTracking: "Theo dõi đơn hàng",
          appDownload: {
            title: "Tải ứng dụng của chúng tôi",
            googlePlayDiscount: "Tải ứng dụng Giảm giá 10%",
            appStoreDiscount: "Tải ứng dụng Giảm giá 20%",
          },
          newsletter: {
            title:
              "Tham gia bản tin của chúng tôi để được giảm giá {{discount}}",
            description:
              "Đăng ký ngay để nhận thông tin cập nhật mới nhất về khuyến mãi & phiếu giảm giá. Đừng lo, chúng tôi không spam!",
            placeholder: "Nhập địa chỉ email của bạn",
            sendButton: "GỬI",
            termsLink: "Điều khoản & Điều kiện",
            privacyLink: "Chính sách Bảo mật & Cookie",
          },
          socialMedia: {
            followUs: "Theo dõi chúng tôi trên mạng xã hội:",
            facebook: "Facebook",
            twitter: "Twitter",
            instagram: "Instagram",
            linkedin: "LinkedIn",
          },
          contactInfo: {
            helpTitle: "Bạn cần trợ giúp ?",
            helpDescription:
              "Autoseligen syr. Nek diarask fröbomba. När antipol kynoda nyrat. Pressa fåmoska.",
            workingHoursLabel: "Giờ làm việc",
            workingHoursValue: "Thứ Hai-Thứ Sáu: 08:00-21:00",
            orderHelpLabel: "Cần trợ giúp với đơn hàng của bạn?",
            email: "info@example.com",
          },
          linkLists: {
            makeMoney: {
              title: "Kiếm tiền với chúng tôi",
              sellOnGrogin: "Bán hàng trên Grogin",
              sellYourServices: "Bán Dịch vụ của bạn trên Grogin",
              sellOnGroginBusiness: "Bán hàng trên Grogin Business",
              sellYourAppsOnGrogin: "Bán Ứng dụng của bạn trên Grogin",
              becomeAnAffiliate: "Trở thành Đối tác liên kết",
              advertiseYourProducts: "Quảng cáo Sản phẩm của bạn",
              sellPublishWithUs: "Bán-Xuất bản với chúng tôi",
              becomeAnBlowwieVendor: "Trở thành Nhà cung cấp Blowwie",
            },
            helpYou: {
              title: "Để chúng tôi giúp bạn",
              accessibilityStatement: "Tuyên bố về Khả năng tiếp cận",
              yourOrders: "Đơn hàng của bạn",
              returnsAndReplacements: "Trả hàng & Hoàn tiền",
              shippingRatesAndPolicies: "Tỷ lệ & Chính sách Vận chuyển",
              refundAndReturnsPolicy: "Chính sách Hoàn tiền và Trả hàng",
              privacyPolicy: "Chính sách Bảo mật",
              termsAndConditions: "Điều khoản và Điều kiện",
              cookieSettings: "Cài đặt Cookie",
              helpCenter: "Trung tâm Trợ giúp",
            },
            moreInfo: {
              title: "Thông tin thêm",
            },
            getKnowUs: {
              title: "Tìm hiểu về chúng tôi",
              careersForGrogin: "Sự nghiệp tại Grogin",
              aboutGrogin: "Về Grogin",
              investorRelations: "Quan hệ Nhà đầu tư",
              groginDevices: "Thiết bị Grogin",
              customerReviews: "Đánh giá của khách hàng",
              socialResponsibility: "Trách nhiệm xã hội",
              storeLocations: "Địa điểm cửa hàng",
            },
          },
        },
        cartPage: {
          continueShoppingButton: "Tiếp tục xem sản phẩm",
          product_list_title: "SẢN PHẨM",
        },
        cartEmptyState: {
          title: "GIỎ HÀNG CỦA BẠN HIỆN ĐANG TRỐNG.",
          returnToShopButton: "Quay về cửa hàng",
        },
        dealsOfTheDaySection: {
          title: "ƯU ĐÃI TRONG NGÀY",
          subtitle: "Đừng bỏ lỡ các ưu đãi có hạn này.",
        },
        featuredProductSection: {
          title: "Sản phẩm nổi bật",
          subtitle: "Đừng bỏ lỡ các ưu đãi hiện tại cho đến cuối tháng.",
          freshFindsTitle: "Sản phẩm mới với giá tốt hơn.",
          freshFindsDescription:
            "Khám phá các sản phẩm mới của chúng tôi, kết hợp giữa chất lượng và giá cả phải chăng.",
        },
        topCategorySection: {
          title: "Danh mục hàng đầu",
          subtitle: "Sản phẩm mới với số lượng cập nhật.",
        },
        viewAllButton: {
          text: "Xem tất cả",
        },
        stockIndicator: {
          lowStockMessage: "Sản phẩm này sắp hết hàng",
        },
        newProducts: {
          title: "SẢN PHẨM MỚI",
          subtitle: "Một số sản phẩm mới về trong tuần này",
        },
        newArrivals: {
          title: "Hàng mới về",
          subtitle: "Một số sản phẩm mới về trong tuần này",
          reviewComment: "Sản phẩm chất lượng tốt chỉ có ở những cửa hàng tốt",
          news1: {
            title: "Nơi hương vị gặp gỡ sự phải chăng.",
            description:
              "Khám phá dòng sản phẩm giá cả phải chăng ngon miệng của chúng tôi...",
          },
          news2: {
            title: "Tìm kiếm mới với giá tốt hơn.",
            description:
              "Khám phá lựa chọn các sản phẩm mới của chúng tôi, kết hợp giữa chất lượng và giá cả phải chăng.",
          },
        },
        add_to_cart: "Thêm vào giỏ hàng",
        cart_summary_title: "CỘNG GIỎ HÀNG",
        cart_subtotal: "Tạm tính",
        cart_total: "Tổng",
        proceed_to_checkout: "TIẾN HÀNH THANH TOÁN",
        pagination_previous: "Trước",
        pagination_next: "Tiếp",
        min_price: "Giá tối thiểu",
        max_price: "Giá tối đa",
        show_label: "Hiển thị:",
        items_label: "sản phẩm",
        showing_results:
          "Hiển thị {{startIndex}}-{{endIndex}} trên tổng số {{totalResults}} kết quả",
        sort_label: "Sắp xếp:",
        no_matching_products: "Không có sản phẩm nào phù hợp.",
        price_min_zero_error: "Giá tối thiểu phải ≥ 0.",
        price_max_zero_error: "Giá tối đa phải ≥ 0.",
        price_min_upper_limit_error:
          "Giá tối thiểu không được vượt quá giới hạn tối đa ({{upperLimit}}).",
        price_max_upper_limit_error:
          "Giá tối đa không được vượt quá giới hạn tối đa ({{upperLimit}}).",
        price_min_greater_than_max_error:
          "Giá tối thiểu không được lớn hơn giá tối đa.",
        price_max_less_than_min_error:
          "Giá tối đa không được nhỏ hơn giá tối thiểu.",
        login_form: {
          account_prompt: "Chưa có tài khoản? Đăng ký ngay!",
          username_email_label: "Tên người dùng hoặc Email",
          password_label: "Mật khẩu",
          remember_me: "Ghi nhớ tôi",
          lost_password: "Quên mật khẩu?",
          log_in_button: "Đăng nhập",
          login_success_title: "Đăng nhập thành công",
          login_success_message:
            "Chào mừng {{username}} đã quay trở lại! Cùng mua sắm thôi!",
          login_failure_title: "Đăng nhập thất bại",
          login_error_message: "Có lỗi xảy ra.",
          login_failed: "Đăng nhập thất bại",
        },
        register_form: {
          advantages_text:
            "Đăng ký ngay để nhận tất cả các lợi ích của cửa hàng chúng tôi!",
          username_label: "Tên người dùng",
          email_label: "Email",
          password_label: "Mật khẩu",
          customer_radio: "Tôi là khách hàng",
          vendor_radio: "Tôi là nhà cung cấp",
          privacy_policy_prefix:
            "Dữ liệu cá nhân của bạn sẽ được sử dụng để hỗ trợ trải nghiệm của bạn trên trang web này, để quản lý quyền truy cập vào tài khoản của bạn và cho các mục đích khác được mô tả trong",
          privacy_policy_link: "chính sách bảo mật",
          register_success_title: "Đăng ký thành công",
          register_success_message: "Chào mừng {{username}}!",
          register_failure_title: "Đăng ký thất bại",
          register_error_message: "Có lỗi xảy ra.",
        },
        validation: {
          username_min_length:
            "Tên người dùng hoặc email phải có ít nhất 6 ký tự.",
          password_min_length: "Mật khẩu phải có ít nhất 6 ký tự.",
          email_invalid: "Địa chỉ email không hợp lệ.",
          role_invalid: "Vai trò không hợp lệ.",
          validation_required_field: "Trường này là bắt buộc.",
          validation_invalid_email: "Địa chỉ email không hợp lệ.",
          validation_invalid_phone: "Số điện thoại không hợp lệ.",
          validation_invalid_zip_code: "Mã bưu điện không hợp lệ.",
        },
        auth: {
          login: "Đăng nhập",
          register: "Đăng ký",
        },
        product_actions: {
          add_to_cart: "Thêm vào giỏ hàng",
          buy_now: "Mua ngay",
        },
        logout: {
          success_title: "Đã đăng xuất!",
          success_message: "Bạn chưa đăng nhập hãy đăng nhập ngay!"
        },
        product_categories: "Danh mục sản phẩm",
        widget_price_filter: "Lọc sản phẩm theo giá",
        privacyConfirm: {
          personalData: "Dữ liệu cá nhân của bạn sẽ được sử dụng để xử lý đơn đặt hàng, hỗ trợ trải nghiệm của bạn trên trang web này và cho các mục đích khác được mô tả trong",
          privacyPolicy: "chính sách bảo mật",
          agreeTerms: "Tôi đã đọc và đồng ý với",
          termsAndConditions: "điều khoản và điều kiện của trang web",
        },
        paymentMethods: {
          directBankTransfer: "Chuyển khoản ngân hàng trực tiếp",
          directBankTransferDescription: "Thực hiện thanh toán trực tiếp vào tài khoản ngân hàng của chúng tôi. Vui lòng sử dụng Mã đơn hàng của bạn làm tham chiếu thanh toán. Đơn hàng của bạn sẽ không được giao cho đến khi tiền đã được thanh toán vào tài khoản của chúng tôi.",
          checkPayments: "Thanh toán bằng séc",
          cashOnDelivery: "Thanh toán khi nhận hàng",
        },
        freeShippingThreshold: {
          message: "Thêm {{amount}} vào giỏ hàng để được miễn phí vận chuyển!",
        },
        your_order: "Đơn của bạn",
        order_btn: "Đặt đơn",
        couponService: {
          couponNotFound: "Mã giảm giá không tồn tại.",
          couponExpired: "Mã giảm giá đã hết hạn.",
          minAmountRequired: "Tổng đơn hàng phải từ {{amount}} trở lên để áp dụng mã này.",
          couponAppliedSuccessfully: "Mã giảm giá đã được áp dụng thành công!",
        },
        couponInput: {
          emptyCodeError: "Mã giảm giá không được để trống.",
          placeholder: "Mã giảm giá",
        },
        billing_details_title: "Chi tiết thanh toán",
        first_name: "Tên",
        last_name: "Họ",
        company_name: "Tên công ty (Tùy chọn)",
        country_region: "Quốc gia / Khu vực",
        street_address: "Địa chỉ đường",
        house_number_street_name: "Số nhà và tên đường",
        apartment_suite_optional: "Căn hộ, dãy phòng, đơn vị, v.v. (tùy chọn)",
        town_city: "Thị trấn / Thành phố",
        state: "Tỉnh / Bang",
        zip_code: "Mã bưu điện",
        phone: "Điện thoại",
        email_address: "Địa chỉ email",
        create_an_account: "Tạo tài khoản?",
        ship_to_a_different_address: "Giao hàng đến địa chỉ khác?",
        order_notes: "Ghi chú đơn hàng",
        order_notes_placeholder: "Ghi chú về đơn hàng của bạn, ví dụ: ghi chú đặc biệt để giao hàng.",
        product_name: "Tên sản phẩm",
        shipping_options: {
          flat_rate: "Flat rate",
          local_pickup: "Local pickup",
        },

      },
    },
  },
});

export default i18n;
