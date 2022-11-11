export const Header = () => {
  return (
    <header className="header-v1">
      <div className="navbar navbar-default" id="ibid-main-head">
        <div className="container">
          <div className="row">
            <div className="navbar-header col-md-3 col-sm-12">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#navbar"
                aria-expanded="false"
                aria-controls="navbar"
              >
                <span className="sr-only" />
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <div className="mobile_only_icon_group search">
                <a href="/#" className="mt-search-icon">
                  <i className="fas fa-search" aria-hidden="true" />
                </a>
              </div>
              <div className="mobile_only_icon_group cart">
                <a href="https://ibid.modeltheme.com/cart/">
                  <i className="fas fa-shopping-basket" />
                </a>
              </div>
              <div className="mobile_only_icon_group wishlist">
                <a
                  className="top-payment"
                  href="https://ibid.modeltheme.com/wishlist/"
                >
                  <i className="fas fa-heart" />
                </a>
              </div>
              <div className="mobile_only_icon_group account">
                <a href="https://ibid.modeltheme.com/my-account/">
                  <i className="far fa-user" />
                </a>
              </div>
              <div className="logo logo-image">
                <a href="https://ibid.modeltheme.com">
                  <img
                    src="https://ibid.modeltheme.com/wp-content/uploads/2019/08/logo-ibid.png"
                    alt="iBid"
                  />
                </a>
              </div>
            </div>
            <div className="first-part col-md-9 col-sm-12">
              <div className="col-md-8 search-form-product">
                <div className="ibid-header-searchform">
                  <form
                    name="header-search-form"
                    method="GET"
                    autoComplete="off"
                    className="woocommerce-product-search menu-search"
                    action="https://ibid.modeltheme.com/"
                    data-hs-cf-bound="true"
                  >
                    <select
                      name="product_cat"
                      id="product_cat"
                      className="form-control1"
                      style={{ display: "none" }}
                    >
                      <option value="">Category</option>
                      <option className="level-0" value="electronics">
                        Electronics&nbsp;&nbsp;(9)
                      </option>
                      <option className="level-1" value="televisions">
                        &nbsp;&nbsp;&nbsp;Televisions&nbsp;&nbsp;(7)
                      </option>
                      <option className="level-0" value="home-appliances">
                        Home Appliances&nbsp;&nbsp;(4)
                      </option>
                      <option className="level-1" value="refrigerators">
                        &nbsp;&nbsp;&nbsp;Refrigerators&nbsp;&nbsp;(1)
                      </option>
                      <option className="level-0" value="kids-toys">
                        Kids Toys&nbsp;&nbsp;(1)
                      </option>
                      <option className="level-0" value="laptops">
                        Laptops IT Products&nbsp;&nbsp;(5)
                      </option>
                      <option className="level-1" value="accessories">
                        &nbsp;&nbsp;&nbsp;Accessories&nbsp;&nbsp;(1)
                      </option>
                      <option className="level-0" value="phones">
                        Phones&nbsp;&nbsp;(12)
                      </option>
                      <option className="level-1" value="protection-phones">
                        &nbsp;&nbsp;&nbsp;Cases &amp; Protection&nbsp;&nbsp;(4)
                      </option>
                      <option className="level-1" value="console-gaming">
                        &nbsp;&nbsp;&nbsp;Console Gaming&nbsp;&nbsp;(3)
                      </option>
                      <option className="level-1" value="data-cables-phones">
                        &nbsp;&nbsp;&nbsp;Data Cables&nbsp;&nbsp;(4)
                      </option>
                      <option className="level-1" value="mobile-phone-chargers">
                        &nbsp;&nbsp;&nbsp;Mobile Chargers&nbsp;&nbsp;(3)
                      </option>
                      <option className="level-1" value="mobile-phones">
                        &nbsp;&nbsp;&nbsp;Mobile Phones&nbsp;&nbsp;(4)
                      </option>
                      <option className="level-1" value="power-bank">
                        &nbsp;&nbsp;&nbsp;Power Banks&nbsp;&nbsp;(4)
                      </option>
                      <option className="level-1" value="selfie-stickers">
                        &nbsp;&nbsp;&nbsp;Selfie Sticks&nbsp;&nbsp;(4)
                      </option>
                      <option className="level-1" value="tablets">
                        &nbsp;&nbsp;&nbsp;Tablets&nbsp;&nbsp;(3)
                      </option>
                      <option className="level-1" value="protection-tablets">
                        &nbsp;&nbsp;&nbsp;Tablets Protection&nbsp;&nbsp;(3)
                      </option>
                      <option className="level-0" value="sales">
                        Sales&nbsp;&nbsp;(1)
                      </option>
                    </select>
                    <div className="nice-select form-control1" tabIndex={0}>
                      <span className="current">Category</span>
                      <ul className="list">
                        <li data-value="" className="option selected">
                          Category
                        </li>
                        <li data-value="electronics" className="option">
                          Electronics&nbsp;&nbsp;(9)
                        </li>
                        <li data-value="televisions" className="option">
                          &nbsp;&nbsp;&nbsp;Televisions&nbsp;&nbsp;(7)
                        </li>
                        <li data-value="home-appliances" className="option">
                          Home Appliances&nbsp;&nbsp;(4)
                        </li>
                        <li data-value="refrigerators" className="option">
                          &nbsp;&nbsp;&nbsp;Refrigerators&nbsp;&nbsp;(1)
                        </li>
                        <li data-value="kids-toys" className="option">
                          Kids Toys&nbsp;&nbsp;(1)
                        </li>
                        <li data-value="laptops" className="option">
                          Laptops IT Products&nbsp;&nbsp;(5)
                        </li>
                        <li data-value="accessories" className="option">
                          &nbsp;&nbsp;&nbsp;Accessories&nbsp;&nbsp;(1)
                        </li>
                        <li data-value="phones" className="option">
                          Phones&nbsp;&nbsp;(12)
                        </li>
                        <li data-value="protection-phones" className="option">
                          &nbsp;&nbsp;&nbsp;Cases &amp;
                          Protection&nbsp;&nbsp;(4)
                        </li>
                        <li data-value="console-gaming" className="option">
                          &nbsp;&nbsp;&nbsp;Console Gaming&nbsp;&nbsp;(3)
                        </li>
                        <li data-value="data-cables-phones" className="option">
                          &nbsp;&nbsp;&nbsp;Data Cables&nbsp;&nbsp;(4)
                        </li>
                        <li
                          data-value="mobile-phone-chargers"
                          className="option"
                        >
                          &nbsp;&nbsp;&nbsp;Mobile Chargers&nbsp;&nbsp;(3)
                        </li>
                        <li data-value="mobile-phones" className="option">
                          &nbsp;&nbsp;&nbsp;Mobile Phones&nbsp;&nbsp;(4)
                        </li>
                        <li data-value="power-bank" className="option">
                          &nbsp;&nbsp;&nbsp;Power Banks&nbsp;&nbsp;(4)
                        </li>
                        <li data-value="selfie-stickers" className="option">
                          &nbsp;&nbsp;&nbsp;Selfie Sticks&nbsp;&nbsp;(4)
                        </li>
                        <li data-value="tablets" className="option">
                          &nbsp;&nbsp;&nbsp;Tablets&nbsp;&nbsp;(3)
                        </li>
                        <li data-value="protection-tablets" className="option">
                          &nbsp;&nbsp;&nbsp;Tablets Protection&nbsp;&nbsp;(3)
                        </li>
                        <li data-value="sales" className="option">
                          Sales&nbsp;&nbsp;(1)
                        </li>
                      </ul>
                    </div>
                    <input
                      type="text"
                      name="s"
                      className="search-field search-keyword"
                      onKeyUp="ibid_fetch_products()"
                      maxLength={128}
                      defaultValue=""
                      placeholder="Search products..."
                    />
                    <button type="submit" className="btn btn-primary">
                      <i className="fas fa-search" aria-hidden="true" />
                    </button>
                    <input
                      type="hidden"
                      name="post_type"
                      defaultValue="product"
                    />
                  </form>
                  <div className="data_fetch" />
                </div>
              </div>
              <div className="col-md-4 menu-products">
                <a
                  className="shop_cart"
                  href="https://ibid.modeltheme.com/cart/"
                >
                  My Cart{" "}
                </a>
                <a
                  className="cart-contents"
                  href="https://ibid.modeltheme.com/cart/"
                  title="View your shopping cart"
                >
                  0 items -{" "}
                  <span className="woocommerce-Price-amount amount">
                    <bdi>
                      <span className="woocommerce-Price-currencySymbol">
                        $
                      </span>
                      0.00
                    </bdi>
                  </span>
                </a>
                <div className="header_mini_cart">
                  <div className="widget woocommerce widget_shopping_cart">
                    <h2 className="widgettitle">Cart</h2>
                    <div className="widget_shopping_cart_content">
                      <p className="woocommerce-mini-cart__empty-message">
                        No products in the cart.
                      </p>
                    </div>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar bottom-navbar-default" id="modeltheme-main-head">
          <div className="container">
            <div className="row row-0">
              <div id="navbar" className="navbar-collapse collapse col-md-10">
                <div className="bot_nav_cat_inner">
                  <div className="bot_nav_cat">
                    <button className="bot_cat_button">
                      <span className="cat_ico_block">Categories</span>
                    </button>
                    <ul className="bot_nav_cat_wrap">
                      <li
                        id="menu-item-5169"
                        className="mega3menu menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-5169"
                      >
                        <a href="https://ibid.modeltheme.com/product-category/phones/">
                          <i className="fa fa-mobile" /> Laptops, Tablets &amp;
                          Phones
                        </a>
                        <div className="cf-mega-menu sub-menu">
                          <div className="vc_row wpb_row vc_row-fluid no-margin vc_custom_1528793566052 vc_row-has-fill">
                            <div className="wpb_column vc_column_container vc_col-sm-6">
                              <div className="vc_column-inner vc_custom_1566989874515">
                                <div className="wpb_wrapper">
                                  <div className="wpb_text_column wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp wpb_start_animation animated">
                                    <div className="wpb_wrapper">
                                      <p
                                        style={{
                                          fontWeight: "bold",
                                          fontSize: 14,
                                          color: "#484848",
                                        }}
                                      >
                                        IT &amp; COMPUTERS
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="vc_empty_space"
                                    style={{ height: 5 }}
                                  >
                                    <span className="vc_empty_space_inner" />
                                  </div>
                                  <div className="wpb_text_column wpb_content_element  menu-cat">
                                    <div className="wpb_wrapper">
                                      <p>
                                        <a href="/#">Laptops</a>
                                        <br />
                                        <a href="/#">Windows Laptops</a>
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="vc_empty_space"
                                    style={{ height: 20 }}
                                  >
                                    <span className="vc_empty_space_inner" />
                                  </div>
                                  <div className="wpb_text_column wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp wpb_start_animation animated">
                                    <div className="wpb_wrapper">
                                      <p
                                        style={{
                                          fontWeight: "bold",
                                          fontSize: 14,
                                          color: "#484848",
                                        }}
                                      >
                                        WEARABLE
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="vc_empty_space"
                                    style={{ height: 5 }}
                                  >
                                    <span className="vc_empty_space_inner" />
                                  </div>
                                  <div className="wpb_text_column wpb_content_element  menu-cat">
                                    <div className="wpb_wrapper">
                                      <p>
                                        <a href="/#">Smart Watches</a>
                                        <br />
                                        <a href="/#">Fitness Bracelets</a>
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="vc_empty_space"
                                    style={{ height: 20 }}
                                  >
                                    <span className="vc_empty_space_inner" />
                                  </div>
                                  <div className="wpb_text_column wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp wpb_start_animation animated">
                                    <div className="wpb_wrapper">
                                      <p
                                        style={{
                                          fontWeight: "bold",
                                          fontSize: 14,
                                          color: "#484848",
                                        }}
                                      >
                                        GADGETS
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="vc_empty_space"
                                    style={{ height: 5 }}
                                  >
                                    <span className="vc_empty_space_inner" />
                                  </div>
                                  <div className="wpb_text_column wpb_content_element  menu-cat">
                                    <div className="wpb_wrapper">
                                      <p>
                                        <a href="/#">Smart Watches</a>
                                        <br />
                                        <a href="/#">Fitness Bracelets</a>
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="vc_empty_space"
                                    style={{ height: 20 }}
                                  >
                                    <span className="vc_empty_space_inner" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="wpb_column vc_column_container vc_col-sm-6">
                              <div className="vc_column-inner vc_custom_1566989880923">
                                <div className="wpb_wrapper">
                                  <div className="wpb_text_column wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp wpb_start_animation animated">
                                    <div className="wpb_wrapper">
                                      <p
                                        style={{
                                          fontWeight: "bold",
                                          fontSize: 14,
                                          color: "#484848",
                                        }}
                                      >
                                        MOBILES PHONES
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="vc_empty_space"
                                    style={{ height: 5 }}
                                  >
                                    <span className="vc_empty_space_inner" />
                                  </div>
                                  <div className="wpb_text_column wpb_content_element  menu-cat">
                                    <div className="wpb_wrapper">
                                      <p>
                                        <a href="/#">Apple Shop</a>
                                        <br />
                                        <a href="/#">Android Smartphones</a>
                                        <br />
                                        <a href="/#">Mobile Phones</a>
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="vc_empty_space"
                                    style={{ height: 20 }}
                                  >
                                    <span className="vc_empty_space_inner" />
                                  </div>
                                  <div className="wpb_text_column wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp wpb_start_animation animated">
                                    <div className="wpb_wrapper">
                                      <p
                                        style={{
                                          fontWeight: "bold",
                                          fontSize: 14,
                                          color: "#484848",
                                        }}
                                      >
                                        ACCESSORIES
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="vc_empty_space"
                                    style={{ height: 5 }}
                                  >
                                    <span className="vc_empty_space_inner" />
                                  </div>
                                  <div className="wpb_text_column wpb_content_element  menu-cat">
                                    <div className="wpb_wrapper">
                                      <p>
                                        <a href="/#">Phone Cases</a>
                                        <br />
                                        <a href="/#">Android Smartphones</a>
                                        <br />
                                        <a href="/#">Chargers</a>
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="vc_empty_space"
                                    style={{ height: 20 }}
                                  >
                                    <span className="vc_empty_space_inner" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li
                        id="menu-item-5192"
                        className="mega3menu menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-5192"
                      >
                        <a href="https://ibid.modeltheme.com/product-category/laptops/">
                          <i className="fa fa-desktop" /> PC, Peripherals &amp;
                          Software
                        </a>
                        <div className="cf-mega-menu sub-menu">
                          <div className="vc_row wpb_row vc_row-fluid no-margin vc_custom_1528793566052 vc_row-has-fill">
                            <div className="wpb_column vc_column_container vc_col-sm-6">
                              <div className="vc_column-inner vc_custom_1566908578324">
                                <div className="wpb_wrapper">
                                  <div className="wpb_text_column wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp wpb_start_animation animated">
                                    <div className="wpb_wrapper"></div>
                                  </div>
                                  <div className="wpb_text_column wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp wpb_start_animation animated">
                                    <div className="wpb_wrapper">
                                      <p
                                        style={{
                                          fontWeight: "bold",
                                          fontSize: 14,
                                          color: "#484848",
                                        }}
                                      >
                                        PCs &amp; MONITORS
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="vc_empty_space"
                                    style={{ height: 5 }}
                                  >
                                    <span className="vc_empty_space_inner" />
                                  </div>
                                  <div className="wpb_text_column wpb_content_element  menu-cat">
                                    <div className="wpb_wrapper">
                                      <p>
                                        <a href="/#">Desktop PC</a>
                                        <br />
                                        <a href="/#">Monitors</a>
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="vc_empty_space"
                                    style={{ height: 20 }}
                                  >
                                    <span className="vc_empty_space_inner" />
                                  </div>
                                  <div className="wpb_text_column wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp wpb_start_animation animated">
                                    <div className="wpb_wrapper">
                                      <p
                                        style={{
                                          fontWeight: "bold",
                                          fontSize: 14,
                                          color: "#484848",
                                        }}
                                      >
                                        PC COMPONENTS
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="vc_empty_space"
                                    style={{ height: 5 }}
                                  >
                                    <span className="vc_empty_space_inner" />
                                  </div>
                                  <div className="wpb_text_column wpb_content_element  menu-cat">
                                    <div className="wpb_wrapper">
                                      <p>
                                        <a href="/#">Motherboards</a>
                                        <br />
                                        <a href="/#">Hard Disks</a>
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="vc_empty_space"
                                    style={{ height: 20 }}
                                  >
                                    <span className="vc_empty_space_inner" />
                                  </div>
                                  <div className="wpb_text_column wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp wpb_start_animation animated">
                                    <div className="wpb_wrapper">
                                      <p
                                        style={{
                                          fontWeight: "bold",
                                          fontSize: 14,
                                          color: "#484848",
                                        }}
                                      >
                                        IT SOFTWARE
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="vc_empty_space"
                                    style={{ height: 5 }}
                                  >
                                    <span className="vc_empty_space_inner" />
                                  </div>
                                  <div className="wpb_text_column wpb_content_element  menu-cat">
                                    <div className="wpb_wrapper">
                                      <p>
                                        <a href="/#">Operating Systems</a>
                                        <br />
                                        <a href="/#">Antivirus</a>
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="vc_empty_space"
                                    style={{ height: 20 }}
                                  >
                                    <span className="vc_empty_space_inner" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="wpb_column vc_column_container vc_col-sm-6">
                              <div className="vc_column-inner vc_custom_1566908586911">
                                <div className="wpb_wrapper">
                                  <div className="wpb_text_column wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp wpb_start_animation animated">
                                    <div className="wpb_wrapper"></div>
                                  </div>
                                  <div className="wpb_text_column wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp wpb_start_animation animated">
                                    <div className="wpb_wrapper">
                                      <p
                                        style={{
                                          fontWeight: "bold",
                                          fontSize: 14,
                                          color: "#484848",
                                        }}
                                      >
                                        PERIFERICS
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="vc_empty_space"
                                    style={{ height: 5 }}
                                  >
                                    <span className="vc_empty_space_inner" />
                                  </div>
                                  <div className="wpb_text_column wpb_content_element  menu-cat">
                                    <div className="wpb_wrapper">
                                      <p>
                                        <a href="/#">Mouses</a>
                                        <br />
                                        <a href="/#">Keyboards</a>
                                        <br />
                                        <a href="/#">Wires</a>
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="vc_empty_space"
                                    style={{ height: 20 }}
                                  >
                                    <span className="vc_empty_space_inner" />
                                  </div>
                                  <div className="wpb_text_column wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp wpb_start_animation animated">
                                    <div className="wpb_wrapper">
                                      <p
                                        style={{
                                          fontWeight: "bold",
                                          fontSize: 14,
                                          color: "#484848",
                                        }}
                                      >
                                        WIRELESS
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="vc_empty_space"
                                    style={{ height: 5 }}
                                  >
                                    <span className="vc_empty_space_inner" />
                                  </div>
                                  <div className="wpb_text_column wpb_content_element  menu-cat">
                                    <div className="wpb_wrapper">
                                      <p>
                                        <a href="/#">Routers</a>
                                        <br />
                                        <a href="/#">Access Point</a>
                                        <br />
                                        <a href="/#">Cams</a>
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="vc_empty_space"
                                    style={{ height: 20 }}
                                  >
                                    <span className="vc_empty_space_inner" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li
                        id="menu-item-5202"
                        className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-5202"
                      >
                        <a href="https://ibid.modeltheme.com/product-category/electronics/">
                          <i className="fa fa-tv" />
                          TV, Audio-Video &amp; Photo
                        </a>
                      </li>
                      <li
                        id="menu-item-5170"
                        className="mega3menu menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-5170"
                      >
                        <a href="https://ibid.modeltheme.com/product-category/home-appliances/">
                          <i className="fa fa-adjust" />
                          Home Appliances &amp; AC
                        </a>
                        <div className="cf-mega-menu sub-menu">
                          <div className="vc_row wpb_row vc_row-fluid no-margin vc_custom_1528793566052 vc_row-has-fill">
                            <div className="wpb_column vc_column_container vc_col-sm-6">
                              <div className="vc_column-inner vc_custom_1566989874515">
                                <div className="wpb_wrapper">
                                  <div className="wpb_text_column wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp wpb_start_animation animated">
                                    <div className="wpb_wrapper">
                                      <p
                                        style={{
                                          fontWeight: "bold",
                                          fontSize: 14,
                                          color: "#484848",
                                        }}
                                      >
                                        IT &amp; COMPUTERS
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="vc_empty_space"
                                    style={{ height: 5 }}
                                  >
                                    <span className="vc_empty_space_inner" />
                                  </div>
                                  <div className="wpb_text_column wpb_content_element  menu-cat">
                                    <div className="wpb_wrapper">
                                      <p>
                                        <a href="/#">Laptops</a>
                                        <br />
                                        <a href="/#">Windows Laptops</a>
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="vc_empty_space"
                                    style={{ height: 20 }}
                                  >
                                    <span className="vc_empty_space_inner" />
                                  </div>
                                  <div className="wpb_text_column wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp wpb_start_animation animated">
                                    <div className="wpb_wrapper">
                                      <p
                                        style={{
                                          fontWeight: "bold",
                                          fontSize: 14,
                                          color: "#484848",
                                        }}
                                      >
                                        WEARABLE
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="vc_empty_space"
                                    style={{ height: 5 }}
                                  >
                                    <span className="vc_empty_space_inner" />
                                  </div>
                                  <div className="wpb_text_column wpb_content_element  menu-cat">
                                    <div className="wpb_wrapper">
                                      <p>
                                        <a href="/#">Smart Watches</a>
                                        <br />
                                        <a href="/#">Fitness Bracelets</a>
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="vc_empty_space"
                                    style={{ height: 20 }}
                                  >
                                    <span className="vc_empty_space_inner" />
                                  </div>
                                  <div className="wpb_text_column wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp wpb_start_animation animated">
                                    <div className="wpb_wrapper">
                                      <p
                                        style={{
                                          fontWeight: "bold",
                                          fontSize: 14,
                                          color: "#484848",
                                        }}
                                      >
                                        GADGETS
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="vc_empty_space"
                                    style={{ height: 5 }}
                                  >
                                    <span className="vc_empty_space_inner" />
                                  </div>
                                  <div className="wpb_text_column wpb_content_element  menu-cat">
                                    <div className="wpb_wrapper">
                                      <p>
                                        <a href="/#">Smart Watches</a>
                                        <br />
                                        <a href="/#">Fitness Bracelets</a>
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="vc_empty_space"
                                    style={{ height: 20 }}
                                  >
                                    <span className="vc_empty_space_inner" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="wpb_column vc_column_container vc_col-sm-6">
                              <div className="vc_column-inner vc_custom_1566989880923">
                                <div className="wpb_wrapper">
                                  <div className="wpb_text_column wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp wpb_start_animation animated">
                                    <div className="wpb_wrapper">
                                      <p
                                        style={{
                                          fontWeight: "bold",
                                          fontSize: 14,
                                          color: "#484848",
                                        }}
                                      >
                                        MOBILES PHONES
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="vc_empty_space"
                                    style={{ height: 5 }}
                                  >
                                    <span className="vc_empty_space_inner" />
                                  </div>
                                  <div className="wpb_text_column wpb_content_element  menu-cat">
                                    <div className="wpb_wrapper">
                                      <p>
                                        <a href="/#">Apple Shop</a>
                                        <br />
                                        <a href="/#">Android Smartphones</a>
                                        <br />
                                        <a href="/#">Mobile Phones</a>
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="vc_empty_space"
                                    style={{ height: 20 }}
                                  >
                                    <span className="vc_empty_space_inner" />
                                  </div>
                                  <div className="wpb_text_column wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp wpb_start_animation animated">
                                    <div className="wpb_wrapper">
                                      <p
                                        style={{
                                          fontWeight: "bold",
                                          fontSize: 14,
                                          color: "#484848",
                                        }}
                                      >
                                        ACCESSORIES
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="vc_empty_space"
                                    style={{ height: 5 }}
                                  >
                                    <span className="vc_empty_space_inner" />
                                  </div>
                                  <div className="wpb_text_column wpb_content_element  menu-cat">
                                    <div className="wpb_wrapper">
                                      <p>
                                        <a href="/#">Phone Cases</a>
                                        <br />
                                        <a href="/#">Android Smartphones</a>
                                        <br />
                                        <a href="/#">Chargers</a>
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="vc_empty_space"
                                    style={{ height: 20 }}
                                  >
                                    <span className="vc_empty_space_inner" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li
                        id="menu-item-5171"
                        className="mega3menu menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-5171"
                      >
                        <a href="https://ibid.modeltheme.com/product-category/petshop/">
                          <i className="fa fa-gamepad" />
                          Games &amp; Consoles
                        </a>
                        <div className="cf-mega-menu sub-menu">
                          <div className="vc_row wpb_row vc_row-fluid no-margin vc_custom_1528793566052 vc_row-has-fill">
                            <div className="wpb_column vc_column_container vc_col-sm-6">
                              <div className="vc_column-inner vc_custom_1566908578324">
                                <div className="wpb_wrapper">
                                  <div className="wpb_text_column wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp wpb_start_animation animated">
                                    <div className="wpb_wrapper"></div>
                                  </div>
                                  <div className="wpb_text_column wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp wpb_start_animation animated">
                                    <div className="wpb_wrapper">
                                      <p
                                        style={{
                                          fontWeight: "bold",
                                          fontSize: 14,
                                          color: "#484848",
                                        }}
                                      >
                                        PCs &amp; MONITORS
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="vc_empty_space"
                                    style={{ height: 5 }}
                                  >
                                    <span className="vc_empty_space_inner" />
                                  </div>
                                  <div className="wpb_text_column wpb_content_element  menu-cat">
                                    <div className="wpb_wrapper">
                                      <p>
                                        <a href="/#">Desktop PC</a>
                                        <br />
                                        <a href="/#">Monitors</a>
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="vc_empty_space"
                                    style={{ height: 20 }}
                                  >
                                    <span className="vc_empty_space_inner" />
                                  </div>
                                  <div className="wpb_text_column wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp wpb_start_animation animated">
                                    <div className="wpb_wrapper">
                                      <p
                                        style={{
                                          fontWeight: "bold",
                                          fontSize: 14,
                                          color: "#484848",
                                        }}
                                      >
                                        PC COMPONENTS
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="vc_empty_space"
                                    style={{ height: 5 }}
                                  >
                                    <span className="vc_empty_space_inner" />
                                  </div>
                                  <div className="wpb_text_column wpb_content_element  menu-cat">
                                    <div className="wpb_wrapper">
                                      <p>
                                        <a href="/#">Motherboards</a>
                                        <br />
                                        <a href="/#">Hard Disks</a>
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="vc_empty_space"
                                    style={{ height: 20 }}
                                  >
                                    <span className="vc_empty_space_inner" />
                                  </div>
                                  <div className="wpb_text_column wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp wpb_start_animation animated">
                                    <div className="wpb_wrapper">
                                      <p
                                        style={{
                                          fontWeight: "bold",
                                          fontSize: 14,
                                          color: "#484848",
                                        }}
                                      >
                                        IT SOFTWARE
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="vc_empty_space"
                                    style={{ height: 5 }}
                                  >
                                    <span className="vc_empty_space_inner" />
                                  </div>
                                  <div className="wpb_text_column wpb_content_element  menu-cat">
                                    <div className="wpb_wrapper">
                                      <p>
                                        <a href="/#">Operating Systems</a>
                                        <br />
                                        <a href="/#">Antivirus</a>
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="vc_empty_space"
                                    style={{ height: 20 }}
                                  >
                                    <span className="vc_empty_space_inner" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="wpb_column vc_column_container vc_col-sm-6">
                              <div className="vc_column-inner vc_custom_1566908586911">
                                <div className="wpb_wrapper">
                                  <div className="wpb_text_column wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp wpb_start_animation animated">
                                    <div className="wpb_wrapper"></div>
                                  </div>
                                  <div className="wpb_text_column wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp wpb_start_animation animated">
                                    <div className="wpb_wrapper">
                                      <p
                                        style={{
                                          fontWeight: "bold",
                                          fontSize: 14,
                                          color: "#484848",
                                        }}
                                      >
                                        PERIFERICS
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="vc_empty_space"
                                    style={{ height: 5 }}
                                  >
                                    <span className="vc_empty_space_inner" />
                                  </div>
                                  <div className="wpb_text_column wpb_content_element  menu-cat">
                                    <div className="wpb_wrapper">
                                      <p>
                                        <a href="/#">Mouses</a>
                                        <br />
                                        <a href="/#">Keyboards</a>
                                        <br />
                                        <a href="/#">Wires</a>
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="vc_empty_space"
                                    style={{ height: 20 }}
                                  >
                                    <span className="vc_empty_space_inner" />
                                  </div>
                                  <div className="wpb_text_column wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp wpb_start_animation animated">
                                    <div className="wpb_wrapper">
                                      <p
                                        style={{
                                          fontWeight: "bold",
                                          fontSize: 14,
                                          color: "#484848",
                                        }}
                                      >
                                        WIRELESS
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="vc_empty_space"
                                    style={{ height: 5 }}
                                  >
                                    <span className="vc_empty_space_inner" />
                                  </div>
                                  <div className="wpb_text_column wpb_content_element  menu-cat">
                                    <div className="wpb_wrapper">
                                      <p>
                                        <a href="/#">Routers</a>
                                        <br />
                                        <a href="/#">Access Point</a>
                                        <br />
                                        <a href="/#">Cams</a>
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="vc_empty_space"
                                    style={{ height: 20 }}
                                  >
                                    <span className="vc_empty_space_inner" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li
                        id="menu-item-5172"
                        className="mega3menu menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-5172"
                      >
                        <a href="https://ibid.modeltheme.com/product-category/fashion-sports/">
                          <i className="fa fa-tint" />
                          Personal Care &amp; Cosmetics
                        </a>
                        <div className="cf-mega-menu sub-menu">
                          <div className="vc_row wpb_row vc_row-fluid no-margin vc_custom_1528793566052 vc_row-has-fill">
                            <div className="wpb_column vc_column_container vc_col-sm-6">
                              <div className="vc_column-inner vc_custom_1566989874515">
                                <div className="wpb_wrapper">
                                  <div className="wpb_text_column wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp wpb_start_animation animated">
                                    <div className="wpb_wrapper">
                                      <p
                                        style={{
                                          fontWeight: "bold",
                                          fontSize: 14,
                                          color: "#484848",
                                        }}
                                      >
                                        IT &amp; COMPUTERS
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="vc_empty_space"
                                    style={{ height: 5 }}
                                  >
                                    <span className="vc_empty_space_inner" />
                                  </div>
                                  <div className="wpb_text_column wpb_content_element  menu-cat">
                                    <div className="wpb_wrapper">
                                      <p>
                                        <a href="/#">Laptops</a>
                                        <br />
                                        <a href="/#">Windows Laptops</a>
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="vc_empty_space"
                                    style={{ height: 20 }}
                                  >
                                    <span className="vc_empty_space_inner" />
                                  </div>
                                  <div className="wpb_text_column wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp wpb_start_animation animated">
                                    <div className="wpb_wrapper">
                                      <p
                                        style={{
                                          fontWeight: "bold",
                                          fontSize: 14,
                                          color: "#484848",
                                        }}
                                      >
                                        WEARABLE
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="vc_empty_space"
                                    style={{ height: 5 }}
                                  >
                                    <span className="vc_empty_space_inner" />
                                  </div>
                                  <div className="wpb_text_column wpb_content_element  menu-cat">
                                    <div className="wpb_wrapper">
                                      <p>
                                        <a href="/#">Smart Watches</a>
                                        <br />
                                        <a href="/#">Fitness Bracelets</a>
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="vc_empty_space"
                                    style={{ height: 20 }}
                                  >
                                    <span className="vc_empty_space_inner" />
                                  </div>
                                  <div className="wpb_text_column wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp wpb_start_animation animated">
                                    <div className="wpb_wrapper">
                                      <p
                                        style={{
                                          fontWeight: "bold",
                                          fontSize: 14,
                                          color: "#484848",
                                        }}
                                      >
                                        GADGETS
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="vc_empty_space"
                                    style={{ height: 5 }}
                                  >
                                    <span className="vc_empty_space_inner" />
                                  </div>
                                  <div className="wpb_text_column wpb_content_element  menu-cat">
                                    <div className="wpb_wrapper">
                                      <p>
                                        <a href="/#">Smart Watches</a>
                                        <br />
                                        <a href="/#">Fitness Bracelets</a>
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="vc_empty_space"
                                    style={{ height: 20 }}
                                  >
                                    <span className="vc_empty_space_inner" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="wpb_column vc_column_container vc_col-sm-6">
                              <div className="vc_column-inner vc_custom_1566989880923">
                                <div className="wpb_wrapper">
                                  <div className="wpb_text_column wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp wpb_start_animation animated">
                                    <div className="wpb_wrapper">
                                      <p
                                        style={{
                                          fontWeight: "bold",
                                          fontSize: 14,
                                          color: "#484848",
                                        }}
                                      >
                                        MOBILES PHONES
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="vc_empty_space"
                                    style={{ height: 5 }}
                                  >
                                    <span className="vc_empty_space_inner" />
                                  </div>
                                  <div className="wpb_text_column wpb_content_element  menu-cat">
                                    <div className="wpb_wrapper">
                                      <p>
                                        <a href="/#">Apple Shop</a>
                                        <br />
                                        <a href="/#">Android Smartphones</a>
                                        <br />
                                        <a href="/#">Mobile Phones</a>
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="vc_empty_space"
                                    style={{ height: 20 }}
                                  >
                                    <span className="vc_empty_space_inner" />
                                  </div>
                                  <div className="wpb_text_column wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp wpb_start_animation animated">
                                    <div className="wpb_wrapper">
                                      <p
                                        style={{
                                          fontWeight: "bold",
                                          fontSize: 14,
                                          color: "#484848",
                                        }}
                                      >
                                        ACCESSORIES
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="vc_empty_space"
                                    style={{ height: 5 }}
                                  >
                                    <span className="vc_empty_space_inner" />
                                  </div>
                                  <div className="wpb_text_column wpb_content_element  menu-cat">
                                    <div className="wpb_wrapper">
                                      <p>
                                        <a href="/#">Phone Cases</a>
                                        <br />
                                        <a href="/#">Android Smartphones</a>
                                        <br />
                                        <a href="/#">Chargers</a>
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="vc_empty_space"
                                    style={{ height: 20 }}
                                  >
                                    <span className="vc_empty_space_inner" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li
                        id="menu-item-5173"
                        className="mega3menu menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-5173"
                      >
                        <a href="https://ibid.modeltheme.com/product-category/kids-toys/">
                          <i className="fa fa-book" />
                          Books, Office &amp; Gifts
                        </a>
                        <div className="cf-mega-menu sub-menu">
                          <div className="vc_row wpb_row vc_row-fluid no-margin vc_custom_1528793566052 vc_row-has-fill">
                            <div className="wpb_column vc_column_container vc_col-sm-6">
                              <div className="vc_column-inner vc_custom_1566908578324">
                                <div className="wpb_wrapper">
                                  <div className="wpb_text_column wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp wpb_start_animation animated">
                                    <div className="wpb_wrapper"></div>
                                  </div>
                                  <div className="wpb_text_column wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp wpb_start_animation animated">
                                    <div className="wpb_wrapper">
                                      <p
                                        style={{
                                          fontWeight: "bold",
                                          fontSize: 14,
                                          color: "#484848",
                                        }}
                                      >
                                        PCs &amp; MONITORS
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="vc_empty_space"
                                    style={{ height: 5 }}
                                  >
                                    <span className="vc_empty_space_inner" />
                                  </div>
                                  <div className="wpb_text_column wpb_content_element  menu-cat">
                                    <div className="wpb_wrapper">
                                      <p>
                                        <a href="/#">Desktop PC</a>
                                        <br />
                                        <a href="/#">Monitors</a>
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="vc_empty_space"
                                    style={{ height: 20 }}
                                  >
                                    <span className="vc_empty_space_inner" />
                                  </div>
                                  <div className="wpb_text_column wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp wpb_start_animation animated">
                                    <div className="wpb_wrapper">
                                      <p
                                        style={{
                                          fontWeight: "bold",
                                          fontSize: 14,
                                          color: "#484848",
                                        }}
                                      >
                                        PC COMPONENTS
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="vc_empty_space"
                                    style={{ height: 5 }}
                                  >
                                    <span className="vc_empty_space_inner" />
                                  </div>
                                  <div className="wpb_text_column wpb_content_element  menu-cat">
                                    <div className="wpb_wrapper">
                                      <p>
                                        <a href="/#">Motherboards</a>
                                        <br />
                                        <a href="/#">Hard Disks</a>
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="vc_empty_space"
                                    style={{ height: 20 }}
                                  >
                                    <span className="vc_empty_space_inner" />
                                  </div>
                                  <div className="wpb_text_column wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp wpb_start_animation animated">
                                    <div className="wpb_wrapper">
                                      <p
                                        style={{
                                          fontWeight: "bold",
                                          fontSize: 14,
                                          color: "#484848",
                                        }}
                                      >
                                        IT SOFTWARE
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="vc_empty_space"
                                    style={{ height: 5 }}
                                  >
                                    <span className="vc_empty_space_inner" />
                                  </div>
                                  <div className="wpb_text_column wpb_content_element  menu-cat">
                                    <div className="wpb_wrapper">
                                      <p>
                                        <a href="/#">Operating Systems</a>
                                        <br />
                                        <a href="/#">Antivirus</a>
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="vc_empty_space"
                                    style={{ height: 20 }}
                                  >
                                    <span className="vc_empty_space_inner" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="wpb_column vc_column_container vc_col-sm-6">
                              <div className="vc_column-inner vc_custom_1566908586911">
                                <div className="wpb_wrapper">
                                  <div className="wpb_text_column wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp wpb_start_animation animated">
                                    <div className="wpb_wrapper"></div>
                                  </div>
                                  <div className="wpb_text_column wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp wpb_start_animation animated">
                                    <div className="wpb_wrapper">
                                      <p
                                        style={{
                                          fontWeight: "bold",
                                          fontSize: 14,
                                          color: "#484848",
                                        }}
                                      >
                                        PERIFERICS
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="vc_empty_space"
                                    style={{ height: 5 }}
                                  >
                                    <span className="vc_empty_space_inner" />
                                  </div>
                                  <div className="wpb_text_column wpb_content_element  menu-cat">
                                    <div className="wpb_wrapper">
                                      <p>
                                        <a href="/#">Mouses</a>
                                        <br />
                                        <a href="/#">Keyboards</a>
                                        <br />
                                        <a href="/#">Wires</a>
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="vc_empty_space"
                                    style={{ height: 20 }}
                                  >
                                    <span className="vc_empty_space_inner" />
                                  </div>
                                  <div className="wpb_text_column wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp wpb_start_animation animated">
                                    <div className="wpb_wrapper">
                                      <p
                                        style={{
                                          fontWeight: "bold",
                                          fontSize: 14,
                                          color: "#484848",
                                        }}
                                      >
                                        WIRELESS
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="vc_empty_space"
                                    style={{ height: 5 }}
                                  >
                                    <span className="vc_empty_space_inner" />
                                  </div>
                                  <div className="wpb_text_column wpb_content_element  menu-cat">
                                    <div className="wpb_wrapper">
                                      <p>
                                        <a href="/#">Routers</a>
                                        <br />
                                        <a href="/#">Access Point</a>
                                        <br />
                                        <a href="/#">Cams</a>
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="vc_empty_space"
                                    style={{ height: 20 }}
                                  >
                                    <span className="vc_empty_space_inner" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li
                        id="menu-item-5681"
                        className="mega3menu menu-item menu-item-type-custom menu-item-object-custom menu-item-5681"
                      >
                        <a href="/#">
                          <i className="fa fa-truck" /> Order Tracking
                        </a>
                        <div className="cf-mega-menu sub-menu">
                          <div className="vc_row wpb_row vc_row-fluid">
                            <div className="wpb_column vc_column_container vc_col-sm-12">
                              <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                  <div
                                    className="vc_empty_space"
                                    style={{ height: 50 }}
                                  >
                                    <span className="vc_empty_space_inner" />
                                  </div>
                                  <div className="woocommerce">
                                    <form
                                      action="https://ibid.modeltheme.com/cf_mega_menu/order-tracking-mega-menu/"
                                      method="post"
                                      className="woocommerce-form woocommerce-form-track-order track_order"
                                      data-hs-cf-bound="true"
                                    >
                                      <p>
                                        To track your order please enter your
                                        Order ID in the box below and press the
                                        "Track" button. This was given to you on
                                        your receipt and in the confirmation
                                        email you should have received.
                                      </p>
                                      <p className="form-row form-row-first">
                                        <label htmlFor="orderid">
                                          Order ID
                                        </label>{" "}
                                        <input
                                          className="input-text"
                                          type="text"
                                          name="orderid"
                                          id="orderid"
                                          defaultValue=""
                                          placeholder="Found in your order confirmation email."
                                        />
                                      </p>{" "}
                                      <p className="form-row form-row-last">
                                        <label htmlFor="order_email">
                                          Billing email
                                        </label>{" "}
                                        <input
                                          className="input-text"
                                          type="text"
                                          name="order_email"
                                          id="order_email"
                                          defaultValue=""
                                          placeholder="Email you used during checkout."
                                        />
                                      </p>{" "}
                                      <div className="clear" />
                                      <p className="form-row">
                                        <button
                                          type="submit"
                                          className="button"
                                          name="track"
                                          value="Track"
                                        >
                                          Track
                                        </button>
                                      </p>
                                      <input
                                        type="hidden"
                                        id="woocommerce-order-tracking-nonce"
                                        name="woocommerce-order-tracking-nonce"
                                        defaultValue="a5f4474a6c"
                                      />
                                      <input
                                        type="hidden"
                                        name="_wp_http_referer"
                                        defaultValue="/"
                                      />
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bot_nav_wrap">
                  <ul className="menu nav navbar-nav pull-left nav-effect nav-menu">
                    <li
                      id="menu-item-6467"
                      className="mega_menu menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-22 current_page_item menu-item-6467"
                    >
                      <a
                        href="https://ibid.modeltheme.com/"
                        aria-current="page"
                      >
                        Home
                      </a>
                      <div className="cf-mega-menu sub-menu">
                        <div className="vc_row wpb_row vc_row-fluid no-margin vc_custom_1528793566052 vc_row-has-fill">
                          <div className="wpb_column vc_column_container vc_col-sm-4">
                            <div className="vc_column-inner">
                              <div className="wpb_wrapper">
                                <div className="wpb_text_column wpb_content_element  menu-cat">
                                  <div className="wpb_wrapper">
                                    <p>
                                      <a href="https://ibid.modeltheme.com/antiques-collectibles/art-auctions/">
                                        Art Auctions
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/antiques-collectibles/">
                                        Antiques &amp; Collectibles
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/automotive/">
                                        Automotive Auctions
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/books-comics/">
                                        Books &amp; Comics
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/cattle-auctions/">
                                        Cattle Auctions
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/memorabilia-auctions/">
                                        Memorabilia Auctions
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/militaria-auctions/">
                                        Militaria Auctions
                                      </a>
                                      <br />
                                      <a href="https://ibid-freelancer.modeltheme.com/">
                                        Freelancer Mode
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/nft-marketplace/">
                                        NFT Marketplace
                                      </a>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="wpb_column vc_column_container vc_col-sm-4">
                            <div className="vc_column-inner vc_custom_1568113992630">
                              <div className="wpb_wrapper">
                                <div className="wpb_text_column wpb_content_element  menu-cat">
                                  <div className="wpb_wrapper">
                                    <p>
                                      <a href="https://ibid.modeltheme.com/antiques-collectibles/coins-auction/">
                                        Coins Auctions
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/">
                                        Electronics Auctions
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/fundraising-auctions/">
                                        Fundraising Auctions
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/machinery-auctions">
                                        Machinery Auctions
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/domain-auctions">
                                        Domain Auctions
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/laboratory-medical-auctions/">
                                        Laboratory Auctions
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/organic-food/">
                                        Organic Food
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/self-storage-auctions/">
                                        Self Storage Auctions
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/government-surplus/">
                                        Government Surplus
                                      </a>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="wpb_column vc_column_container vc_col-sm-4">
                            <div className="vc_column-inner vc_custom_1568113998351">
                              <div className="wpb_wrapper">
                                <div className="wpb_text_column wpb_content_element  menu-cat">
                                  <div className="wpb_wrapper">
                                    <p>
                                      <a href="https://ibid.modeltheme.com/real-estate">
                                        Real Estate Auctions
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/shop-only">
                                        Shop (No Auctions)
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/countdown-auctions/">
                                        Countdown Auctions
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/automotive/list-auctions/">
                                        List Auctions
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/fashion">
                                        Fashion Shop
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/handmade-auctions/">
                                        Handmade Auctions
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/tours-vacantions/">
                                        Tours Vacantions
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/automobilia/">
                                        Automobilia Auctions
                                      </a>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li
                      id="menu-item-4605"
                      className="mega_menu menu-item menu-item-type-post_type menu-item-object-page menu-item-4605"
                    >
                      <a href="https://ibid.modeltheme.com/shop/">Shop</a>
                      <div className="cf-mega-menu sub-menu">
                        <div className="vc_row wpb_row vc_row-fluid no-margin vc_custom_1528793566052 vc_row-has-fill">
                          <div className="wpb_column vc_column_container vc_col-sm-4">
                            <div className="vc_column-inner">
                              <div className="wpb_wrapper">
                                <div className="wpb_text_column wpb_content_element  vc_custom_1568704286147">
                                  <div className="wpb_wrapper">
                                    <h3
                                      className="title16 text-uppercase font-semibold"
                                      style={{
                                        fontWeight: "bold",
                                        fontSize: 14,
                                        color: "#484848",
                                      }}
                                    >
                                      SHOP SHORTCODES
                                    </h3>
                                  </div>
                                </div>
                                <div
                                  className="vc_empty_space"
                                  style={{ height: 5 }}
                                >
                                  <span className="vc_empty_space_inner" />
                                </div>
                                <div className="wpb_text_column wpb_content_element  menu-cat">
                                  <div className="wpb_wrapper">
                                    <p>
                                      <a href="https://ibid.modeltheme.com/shop/sale-banner/">
                                        <i className="fa fa-percent" /> Sale
                                        Banners
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/shop/products-by-categories/">
                                        <i className="fa fa-th" /> Categories
                                        Grid
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/shortcodes/clients-slider/">
                                        <i className="fa fa-sliders" /> Clients
                                        Slider
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/shortcodes/pricing-tables/">
                                        <i className="fa fa-table" /> Pricing
                                        Tables
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/shortcodes/shop-features/">
                                        <i className="fa fa-cart-arrow-down" />{" "}
                                        Shop Features
                                      </a>
                                    </p>
                                  </div>
                                </div>
                                <div
                                  className="vc_empty_space"
                                  style={{ height: 20 }}
                                >
                                  <span className="vc_empty_space_inner" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="wpb_column vc_column_container vc_col-sm-4">
                            <div className="vc_column-inner vc_custom_1568113992630">
                              <div className="wpb_wrapper">
                                <div className="wpb_text_column wpb_content_element  vc_custom_1568703951022">
                                  <div className="wpb_wrapper">
                                    <h3
                                      className="title16 text-uppercase font-semibold"
                                      style={{
                                        fontWeight: "bold",
                                        fontSize: 14,
                                        color: "#484848",
                                      }}
                                    >
                                      SHOP PAGES
                                    </h3>
                                  </div>
                                </div>
                                <div
                                  className="vc_empty_space"
                                  style={{ height: 5 }}
                                >
                                  <span className="vc_empty_space_inner" />
                                </div>
                                <div className="wpb_text_column wpb_content_element  menu-cat">
                                  <div className="wpb_wrapper">
                                    <p>
                                      <a href="https://ibid.modeltheme.com/shop/best-selling-products/">
                                        <i className="fa fa-line-chart" /> Best
                                        Selling
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/shop/featured-products/">
                                        <i className="fa fa-star-o" /> Featured
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/shop/product-category/">
                                        <i className="fa fa-object-group" /> By
                                        Category
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/shop/recent-added-products/">
                                        <i className="fa fa-clock-o" /> Recent
                                        Added
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/shop/sale-products/">
                                        <i className="fa fa-bolt" /> Sales Now
                                      </a>
                                    </p>
                                  </div>
                                </div>
                                <div
                                  className="vc_empty_space"
                                  style={{ height: 20 }}
                                >
                                  <span className="vc_empty_space_inner" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="wpb_column vc_column_container vc_col-sm-4">
                            <div className="vc_column-inner vc_custom_1568113998351">
                              <div className="wpb_wrapper">
                                <div className="wpb_text_column wpb_content_element ">
                                  <div className="wpb_wrapper">
                                    <h3
                                      className="title16 text-uppercase font-semibold"
                                      style={{
                                        fontWeight: "bold",
                                        fontSize: 14,
                                        color: "#484848",
                                      }}
                                    >
                                      MORE PAGES
                                    </h3>
                                  </div>
                                </div>
                                <div
                                  className="vc_empty_space"
                                  style={{ height: 5 }}
                                >
                                  <span className="vc_empty_space_inner" />
                                </div>
                                <div className="wpb_text_column wpb_content_element  menu-cat">
                                  <div className="wpb_wrapper">
                                    <p>
                                      <a href="https://ibid.modeltheme.com/shop/">
                                        <i className="fa fa-cart-plus" /> Main
                                        Shop
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/product/space-grey-apple-iphone-x-64gb/">
                                        <i className="fa fa-link" /> Single
                                        Product
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/my-account/">
                                        <i className="fa fa-address-card-o" />{" "}
                                        My Account
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/cart/">
                                        <i className="fa fa-shopping-basket" />{" "}
                                        My Basket
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/checkout/">
                                        <i className="fa fa-credit-card" />{" "}
                                        Checkout
                                      </a>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li
                      id="menu-item-5308"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5308"
                    >
                      <a href="https://ibid.modeltheme.com/store-listing/">
                        Vendors
                      </a>
                    </li>
                    <li
                      id="menu-item-5431"
                      className="mega_menu col_2 menu-item menu-item-type-post_type menu-item-object-page menu-item-5431"
                    >
                      <a href="https://ibid.modeltheme.com/shortcodes/">
                        Shortcodes
                      </a>
                      <div className="cf-mega-menu sub-menu">
                        <div className="vc_row wpb_row vc_row-fluid no-margin vc_custom_1528793566052 vc_row-has-fill">
                          <div className="wpb_column vc_column_container vc_col-sm-6">
                            <div className="vc_column-inner">
                              <div className="wpb_wrapper">
                                <div className="wpb_text_column wpb_content_element  vc_custom_1568710985115">
                                  <div className="wpb_wrapper"></div>
                                </div>
                                <div
                                  className="vc_empty_space"
                                  style={{ height: 5 }}
                                >
                                  <span className="vc_empty_space_inner" />
                                </div>
                                <div className="wpb_text_column wpb_content_element  menu-cat">
                                  <div className="wpb_wrapper">
                                    <p>
                                      <a href="https://ibid.modeltheme.com/shortcodes/#accordion">
                                        <i className="fa fa-bars" /> Accordion
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/shortcodes/#client">
                                        <i className="fa fa-briefcase" />{" "}
                                        Clients Grid
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/shortcodes/#counter">
                                        <i className="fa fa-circle-o-notch" />{" "}
                                        Counters
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/shortcodes/#chart">
                                        <i className="fa fa-pie-chart" />{" "}
                                        Piecharts
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/shop/products-by-categories/">
                                        <i className="fa fa-shopping-bag" />{" "}
                                        Products Grid
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/shortcodes/#shop-feature">
                                        <i className="fa fa-shopping-basket" />{" "}
                                        Shop Feature
                                      </a>
                                    </p>
                                  </div>
                                </div>
                                <div
                                  className="vc_empty_space"
                                  style={{ height: 20 }}
                                >
                                  <span className="vc_empty_space_inner" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="wpb_column vc_column_container vc_col-sm-6">
                            <div className="vc_column-inner vc_custom_1568113992630">
                              <div className="wpb_wrapper">
                                <div className="wpb_text_column wpb_content_element  vc_custom_1568711044817">
                                  <div className="wpb_wrapper"></div>
                                </div>
                                <div
                                  className="vc_empty_space"
                                  style={{ height: 5 }}
                                >
                                  <span className="vc_empty_space_inner" />
                                </div>
                                <div className="wpb_text_column wpb_content_element  menu-cat">
                                  <div className="wpb_wrapper">
                                    <p>
                                      <a href="https://ibid.modeltheme.com/shortcodes/#pricing">
                                        <i className="fa fa-table" /> Pricing
                                        Tables
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/shortcodes/#services">
                                        <i className="fa fa-credit-card" />{" "}
                                        Services
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/shortcodes/#bars">
                                        <i className="fa fa-percent" /> Bars
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/shortcodes/#member">
                                        <i className="fa fa-users" /> Members
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/shortcodes/#testimonial">
                                        <i className="fa fa-quote-right" />{" "}
                                        Testimonials
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/blog/blog-boxed-layout/">
                                        <i className="fa fa-pencil" /> Blog
                                        posts
                                      </a>
                                    </p>
                                  </div>
                                </div>
                                <div
                                  className="vc_empty_space"
                                  style={{ height: 20 }}
                                >
                                  <span className="vc_empty_space_inner" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li
                      id="menu-item-4628"
                      className="mega_menu col_1 menu-item menu-item-type-post_type menu-item-object-page menu-item-4628"
                    >
                      <a href="https://ibid.modeltheme.com/blog/">Blog</a>
                      <div className="cf-mega-menu sub-menu">
                        <div className="vc_row wpb_row vc_row-fluid no-margin vc_custom_1528793566052 vc_row-has-fill">
                          <div className="wpb_column vc_column_container vc_col-sm-12">
                            <div className="vc_column-inner vc_custom_1568113992630">
                              <div className="wpb_wrapper">
                                <div className="wpb_text_column wpb_content_element  vc_custom_1568114205449">
                                  <div className="wpb_wrapper">
                                    <h3
                                      className="title16 text-uppercase font-semibold"
                                      style={{
                                        fontWeight: "bold",
                                        fontSize: 14,
                                        color: "#484848",
                                      }}
                                    >
                                      BLOG TYPES
                                    </h3>
                                  </div>
                                </div>
                                <div
                                  className="vc_empty_space"
                                  style={{ height: 5 }}
                                >
                                  <span className="vc_empty_space_inner" />
                                </div>
                                <div className="wpb_text_column wpb_content_element  menu-cat">
                                  <div className="wpb_wrapper">
                                    <p>
                                      <a href="https://ibid.modeltheme.com/blog/blog-boxed-layout/">
                                        <i className="fa fa-pencil" /> Boxed
                                        Layout
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/blog/blog-carousel-type/">
                                        <i className="fa fa-long-arrow-right" />{" "}
                                        Posts Carousel
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/blog/blog-filtered/">
                                        <i className="fa fa-filter" /> News
                                        Filtered
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/blog/blog-minimal-type/">
                                        <i className="fa fa-table" /> Blog
                                        Minimal
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/blog/blog-simple-type/">
                                        <i className="fa fa-clone" /> Simple
                                        Layout
                                      </a>
                                      <br />
                                      <a href="https://ibid.modeltheme.com/vr-boxes-sales-for-black-friday/">
                                        <i className="fa fa-file-text-o" />{" "}
                                        Article Details
                                      </a>
                                    </p>
                                  </div>
                                </div>
                                <div
                                  className="vc_empty_space"
                                  style={{ height: 20 }}
                                >
                                  <span className="vc_empty_space_inner" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li
                      id="menu-item-5401"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5401"
                    >
                      <a href="/#">Media</a>
                      <ul className="sub-menu">
                        <li
                          id="menu-item-5593"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-5593"
                        >
                          <a href="https://ibid.modeltheme.com/media/">Media</a>
                          <ul className="sub-menu">
                            <li
                              id="menu-item-5594"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5594"
                            >
                              <a href="https://ibid.modeltheme.com/media/4-columns/">
                                4 columns
                              </a>
                            </li>
                            <li
                              id="menu-item-5595"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5595"
                            >
                              <a href="https://ibid.modeltheme.com/media/3-columns/">
                                3 columns
                              </a>
                            </li>
                            <li
                              id="menu-item-5596"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5596"
                            >
                              <a href="https://ibid.modeltheme.com/media/2-columns/">
                                2 columns
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li
                          id="menu-item-5589"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-5589"
                        >
                          <a href="https://ibid.modeltheme.com/projects/">
                            Projects
                          </a>
                          <ul className="sub-menu">
                            <li
                              id="menu-item-5590"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5590"
                            >
                              <a href="https://ibid.modeltheme.com/projects/4-columns/">
                                4 columns
                              </a>
                            </li>
                            <li
                              id="menu-item-5591"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5591"
                            >
                              <a href="https://ibid.modeltheme.com/projects/3-columns/">
                                3 columns
                              </a>
                            </li>
                            <li
                              id="menu-item-5592"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5592"
                            >
                              <a href="https://ibid.modeltheme.com/projects/2-columns/">
                                2 columns
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li
                      id="menu-item-4992"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4992"
                    >
                      <a href="https://ibid.modeltheme.com/about/">About</a>
                    </li>
                    <li
                      id="menu-item-4630"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4630"
                    >
                      <a href="https://ibid.modeltheme.com/contact/">Contact</a>
                    </li>
                    <li
                      id="menu-item-5628"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5628"
                    >
                      <a href="/#">Pages</a>
                      <ul className="sub-menu">
                        <li
                          id="menu-item-5627"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5627"
                        >
                          <a href="https://ibid.modeltheme.com/sitemap/">
                            Sitemap
                          </a>
                        </li>
                        <li
                          id="menu-item-5635"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5635"
                        >
                          <a href="https://ibid.modeltheme.com/404-page/">
                            404 Not Found
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2 my-account-navbar">
                <ul>
                  <li id="nav-menu-login" className="ibid-logoin">
                    <a href="https://ibid.modeltheme.com/my-account/">
                      Sign In{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
