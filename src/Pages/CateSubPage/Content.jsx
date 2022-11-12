import { WrapperContent } from "../../Elements/WrapperContent";

export const Content = () => {
  return (
    <WrapperContent propsBreadcum={{ show: true }} padding="1" layout="1">
      <div className="container blog-posts">
        <div className="row">
          <div className="col-md-3 sidebar-content ibid-shop-sidebar">
            <div className="ibid-shop-sidebar-content-inner">
              <div className="ibid-shop-sidebar-close-btn hide-on-desktops">
                <i className="far fa-times-circle icon-close" />
              </div>
              <aside
                id="woocommerce_product_search-2"
                className="widget woocommerce widget_product_search"
              >
                <h3 className="widget-title">Search for auctions</h3>
                <form
                  role="search"
                  method="get"
                  className="woocommerce-product-search"
                  action="https://ibid.modeltheme.com/"
                  data-hs-cf-bound="true"
                >
                  <label
                    className="screen-reader-text"
                    htmlFor="woocommerce-product-search-field-0"
                  >
                    Search for:
                  </label>
                  <input
                    type="search"
                    id="woocommerce-product-search-field-0"
                    className="search-field"
                    placeholder="Search products…"
                    defaultValue=""
                    name="s"
                  />
                  <button type="submit" value="Search">
                    Search
                  </button>
                  <input
                    type="hidden"
                    name="post_type"
                    defaultValue="product"
                  />
                </form>
              </aside>
              <aside
                id="woocommerce_price_filter-2"
                className="widget woocommerce widget_price_filter"
              >
                <h3 className="widget-title">Filter by price</h3>
                <form
                  method="get"
                  action="https://ibid.modeltheme.com/product-category/phones/"
                  data-hs-cf-bound="true"
                >
                  <div className="price_slider_wrapper">
                    <div
                      className="price_slider ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                      style={{}}
                    >
                      <div
                        className="ui-slider-range ui-corner-all ui-widget-header"
                        style={{ left: "0%", width: "100%" }}
                      />
                      <span
                        tabIndex={0}
                        className="ui-slider-handle ui-corner-all ui-state-default"
                        style={{ left: "0%" }}
                      />
                      <span
                        tabIndex={0}
                        className="ui-slider-handle ui-corner-all ui-state-default"
                        style={{ left: "100%" }}
                      />
                    </div>
                    <div className="price_slider_amount" data-step={10}>
                      <input
                        type="text"
                        id="min_price"
                        name="min_price"
                        defaultValue={150}
                        data-min={150}
                        placeholder="Min price"
                        style={{ display: "none" }}
                      />
                      <input
                        type="text"
                        id="max_price"
                        name="max_price"
                        defaultValue={6000}
                        data-max={6000}
                        placeholder="Max price"
                        style={{ display: "none" }}
                      />
                      <button type="submit" className="button">
                        Filter
                      </button>
                      <div className="price_label" style={{}}>
                        Price: <span className="from">$150</span> —{" "}
                        <span className="to">$6,000</span>
                      </div>
                      <div className="clear" />
                    </div>
                  </div>
                </form>
              </aside>
              <aside
                id="woocommerce_layered_nav-2"
                className="widget woocommerce widget_layered_nav woocommerce-widget-layered-nav"
              >
                <h3 className="widget-title">Color</h3>
                <form
                  method="get"
                  action="https://ibid.modeltheme.com/product-category/phones/"
                  className="woocommerce-widget-layered-nav-dropdown"
                  data-hs-cf-bound="true"
                >
                  <select
                    className="woocommerce-widget-layered-nav-dropdown dropdown_layered_nav_color select2-hidden-accessible"
                    multiple=""
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    <option value="">Any Color</option>
                    <option value="blue">Blue</option>
                    <option value="dark">Dark</option>
                    <option value="green">Green</option>
                    <option value="red">Red</option>
                    <option value="white">White</option>
                    <option value="yellow">Yellow</option>
                  </select>
                  <span
                    className="select2 select2-container select2-container--default"
                    dir="ltr"
                    style={{ width: "100%" }}
                  >
                    <span className="selection">
                      <span
                        className="select2-selection select2-selection--multiple"
                        aria-haspopup="true"
                        aria-expanded="false"
                        tabIndex={-1}
                      >
                        <ul
                          className="select2-selection__rendered"
                          aria-live="polite"
                          aria-relevant="additions removals"
                          aria-atomic="true"
                        >
                          <li className="select2-search select2-search--inline">
                            <input
                              className="select2-search__field"
                              type="text"
                              tabIndex={0}
                              autoComplete="off"
                              autoCorrect="off"
                              autoCapitalize="none"
                              spellCheck="false"
                              aria-autocomplete="list"
                              placeholder="Any Color"
                            />
                          </li>
                        </ul>
                      </span>
                    </span>
                    <span className="dropdown-wrapper" aria-hidden="true" />
                  </span>
                  <button
                    className="woocommerce-widget-layered-nav-dropdown__submit"
                    type="submit"
                    value="Apply"
                  >
                    Apply
                  </button>
                  <input
                    type="hidden"
                    name="query_type_color"
                    defaultValue="or"
                  />
                  <input type="hidden" name="filter_color" defaultValue="" />
                </form>
              </aside>
              <aside
                id="woocommerce_layered_nav-3"
                className="widget woocommerce widget_layered_nav woocommerce-widget-layered-nav"
              >
                <h3 className="widget-title">Condition</h3>
                <form
                  method="get"
                  action="https://ibid.modeltheme.com/product-category/phones/"
                  className="woocommerce-widget-layered-nav-dropdown"
                  data-hs-cf-bound="true"
                >
                  <select
                    className="woocommerce-widget-layered-nav-dropdown dropdown_layered_nav_condition select2-hidden-accessible"
                    multiple=""
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    <option value="">Any Condition</option>
                    <option value="new">New</option>
                    <option value="used">Used</option>
                  </select>
                  <span
                    className="select2 select2-container select2-container--default"
                    dir="ltr"
                    style={{ width: "100%" }}
                  >
                    <span className="selection">
                      <span
                        className="select2-selection select2-selection--multiple"
                        aria-haspopup="true"
                        aria-expanded="false"
                        tabIndex={-1}
                      >
                        <ul
                          className="select2-selection__rendered"
                          aria-live="polite"
                          aria-relevant="additions removals"
                          aria-atomic="true"
                        >
                          <li className="select2-search select2-search--inline">
                            <input
                              className="select2-search__field"
                              type="text"
                              tabIndex={0}
                              autoComplete="off"
                              autoCorrect="off"
                              autoCapitalize="none"
                              spellCheck="false"
                              aria-autocomplete="list"
                              placeholder="Any Condition"
                            />
                          </li>
                        </ul>
                      </span>
                    </span>
                    <span className="dropdown-wrapper" aria-hidden="true" />
                  </span>
                  <button
                    className="woocommerce-widget-layered-nav-dropdown__submit"
                    type="submit"
                    value="Apply"
                  >
                    Apply
                  </button>
                  <input
                    type="hidden"
                    name="query_type_condition"
                    defaultValue="or"
                  />
                  <input
                    type="hidden"
                    name="filter_condition"
                    defaultValue=""
                  />
                </form>
              </aside>
              <aside
                id="woocommerce_layered_nav-4"
                className="widget woocommerce widget_layered_nav woocommerce-widget-layered-nav"
              >
                <h3 className="widget-title">Size</h3>
                <ul className="woocommerce-widget-layered-nav-list">
                  <li className="woocommerce-widget-layered-nav-list__item wc-layered-nav-term ">
                    <a
                      rel="nofollow"
                      href="https://ibid.modeltheme.com/product-category/phones/?filter_size=large&query_type_size=or"
                    >
                      Large
                    </a>{" "}
                    <span className="count">(3)</span>
                  </li>
                  <li className="woocommerce-widget-layered-nav-list__item wc-layered-nav-term ">
                    <a
                      rel="nofollow"
                      href="https://ibid.modeltheme.com/product-category/phones/?filter_size=medium&query_type_size=or"
                    >
                      Medium
                    </a>{" "}
                    <span className="count">(2)</span>
                  </li>
                </ul>
              </aside>
              <aside
                id="woocommerce_product_tag_cloud-2"
                className="widget woocommerce widget_product_tag_cloud"
              >
                <h3 className="widget-title">Product tags</h3>
                <div className="tagcloud">
                  <a
                    href="https://ibid.modeltheme.com/product-tag/accessories/"
                    className="tag-cloud-link tag-link-105 tag-link-position-1"
                    style={{ fontSize: "8pt" }}
                    aria-label="Accessories (3 products)"
                  >
                    Accessories
                  </a>
                  <a
                    href="https://ibid.modeltheme.com/product-tag/black-friday/"
                    className="tag-cloud-link tag-link-111 tag-link-position-2"
                    style={{ fontSize: "22pt" }}
                    aria-label="black friday (21 products)"
                  >
                    black friday
                  </a>
                  <a
                    href="https://ibid.modeltheme.com/product-tag/gaming/"
                    className="tag-cloud-link tag-link-109 tag-link-position-3"
                    style={{ fontSize: "8pt" }}
                    aria-label="Gaming (3 products)"
                  >
                    Gaming
                  </a>
                  <a
                    href="https://ibid.modeltheme.com/product-tag/sales/"
                    className="tag-cloud-link tag-link-112 tag-link-position-4"
                    style={{ fontSize: "21.621621621622pt" }}
                    aria-label="sales (20 products)"
                  >
                    sales
                  </a>
                </div>
              </aside>
              <aside
                id="woocommerce_product_categories-2"
                className="widget woocommerce widget_product_categories"
              >
                <h3 className="widget-title">Product categories</h3>
                <ul className="product-categories">
                  <li className="cat-item cat-item-47 cat-parent">
                    <a href="https://ibid.modeltheme.com/product-category/electronics/">
                      Electronics
                    </a>
                    <ul className="children">
                      <li className="cat-item cat-item-97">
                        <a href="https://ibid.modeltheme.com/product-category/electronics/televisions/">
                          Televisions
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="cat-item cat-item-50 cat-parent">
                    <a href="https://ibid.modeltheme.com/product-category/home-appliances/">
                      Home Appliances
                    </a>
                    <ul className="children">
                      <li className="cat-item cat-item-98">
                        <a href="https://ibid.modeltheme.com/product-category/home-appliances/refrigerators/">
                          Refrigerators
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="cat-item cat-item-15">
                    <a href="https://ibid.modeltheme.com/product-category/kids-toys/">
                      Kids Toys
                    </a>
                  </li>
                  <li className="cat-item cat-item-49 cat-parent">
                    <a href="https://ibid.modeltheme.com/product-category/laptops/">
                      Laptops IT Products
                    </a>
                    <ul className="children">
                      <li className="cat-item cat-item-114">
                        <a href="https://ibid.modeltheme.com/product-category/laptops/accessories/">
                          Accessories
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="cat-item cat-item-51 current-cat cat-parent">
                    <a href="https://ibid.modeltheme.com/product-category/phones/">
                      Phones
                    </a>
                    <ul className="children">
                      <li className="cat-item cat-item-62">
                        <a href="https://ibid.modeltheme.com/product-category/phones/protection-phones/">
                          Cases &amp; Protection
                        </a>
                      </li>
                      <li className="cat-item cat-item-69">
                        <a href="https://ibid.modeltheme.com/product-category/phones/console-gaming/">
                          Console Gaming
                        </a>
                      </li>
                      <li className="cat-item cat-item-65">
                        <a href="https://ibid.modeltheme.com/product-category/phones/data-cables-phones/">
                          Data Cables
                        </a>
                      </li>
                      <li className="cat-item cat-item-64">
                        <a href="https://ibid.modeltheme.com/product-category/phones/mobile-phone-chargers/">
                          Mobile Chargers
                        </a>
                      </li>
                      <li className="cat-item cat-item-59">
                        <a href="https://ibid.modeltheme.com/product-category/phones/mobile-phones/">
                          Mobile Phones
                        </a>
                      </li>
                      <li className="cat-item cat-item-63">
                        <a href="https://ibid.modeltheme.com/product-category/phones/power-bank/">
                          Power Banks
                        </a>
                      </li>
                      <li className="cat-item cat-item-66">
                        <a href="https://ibid.modeltheme.com/product-category/phones/selfie-stickers/">
                          Selfie Sticks
                        </a>
                      </li>
                      <li className="cat-item cat-item-67">
                        <a href="https://ibid.modeltheme.com/product-category/phones/tablets/">
                          Tablets
                        </a>
                      </li>
                      <li className="cat-item cat-item-68">
                        <a href="https://ibid.modeltheme.com/product-category/phones/protection-tablets/">
                          Tablets Protection
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="cat-item cat-item-418">
                    <a href="https://ibid.modeltheme.com/product-category/sales/">
                      Sales
                    </a>
                  </li>
                </ul>
              </aside>{" "}
            </div>
          </div>
          <div className="col-md-9 main-content">
            <div className="ibid-shop-sort-group">
              <div className="woocommerce-notices-wrapper" />
              <p className="woocommerce-result-count">
                Showing 1–9 of 12 results
              </p>
              <form
                className="woocommerce-ordering"
                method="get"
                data-hs-cf-bound="true"
              >
                <select
                  name="orderby"
                  className="orderby"
                  aria-label="Shop order"
                  style={{ display: "none" }}
                >
                  <option value="menu_order" selected="selected">
                    Default sorting
                  </option>
                  <option value="popularity">Sort by popularity</option>
                  <option value="date">Sort by latest</option>
                  <option value="price">Sort by price: low to high</option>
                  <option value="price-desc">Sort by price: high to low</option>
                  <option value="bid_asc">
                    Sort by current bid: Low to high
                  </option>
                  <option value="bid_desc">
                    Sort by current bid: High to low
                  </option>
                  <option value="auction_end">
                    Sort auction by ending soonest
                  </option>
                  <option value="auction_started">
                    Sort auction by recently started
                  </option>
                  <option value="auction_activity">
                    Sort auction by most active
                  </option>
                </select>
                <div className="nice-select orderby" tabIndex={0}>
                  <span className="current">Default sorting</span>
                  <ul className="list">
                    <li data-value="menu_order" className="option selected">
                      Default sorting
                    </li>
                    <li data-value="popularity" className="option">
                      Sort by popularity
                    </li>
                    <li data-value="date" className="option">
                      Sort by latest
                    </li>
                    <li data-value="price" className="option">
                      Sort by price: low to high
                    </li>
                    <li data-value="price-desc" className="option">
                      Sort by price: high to low
                    </li>
                    <li data-value="bid_asc" className="option">
                      Sort by current bid: Low to high
                    </li>
                    <li data-value="bid_desc" className="option">
                      Sort by current bid: High to low
                    </li>
                    <li data-value="auction_end" className="option">
                      Sort auction by ending soonest
                    </li>
                    <li data-value="auction_started" className="option">
                      Sort auction by recently started
                    </li>
                    <li data-value="auction_activity" className="option">
                      Sort auction by most active
                    </li>
                  </ul>
                </div>
                <input type="hidden" name="paged" defaultValue={1} />
              </form>
              <a
                 href="/#"
                className="ibid-shop-filters-button btn btn-success hide-on-desktops"
              >
                <i className="fas fa-filter" /> Filters
              </a>
              <nav className="gridlist-toggle">
                <a  href="/#" id="grid" title="Grid view">
                  <span className="dashicons dashicons-grid-view" />{" "}
                  <em>Grid view</em>
                </a>
                <a  href="/#" id="list" title="List view" className="active">
                  <span className="dashicons dashicons-exerpt-view" />{" "}
                  <em>List view</em>
                </a>
              </nav>{" "}
              <div className="clearfix" />
            </div>
            <div className="clearfix" />
            <ul className="products columns-3 list">
              <li className=" first post-4472 product type-product status-publish has-post-thumbnail product_cat-protection-phones product_cat-console-gaming product_cat-data-cables-phones product_cat-mobile-phone-chargers product_cat-mobile-phones product_cat-phones product_cat-power-bank product_cat-selfie-stickers product_cat-tablets product_cat-protection-tablets product_tag-black-friday product_tag-sales outofstock sold-individually shipping-taxable product-type-auction">
                <div className="products-wrapper">
                  <div className="thumbnail-and-details">
                    <div className="overlay-container">
                      <div className="thumbnail-overlay" />
                      <div className="overlay-components">
                        <div className="component add-to-cart">
                          <a
                            href="https://ibid.modeltheme.com/product/desktop-ttz-gamer-lasvegas-v4-intel-coffee-lake-model/"
                            data-quantity={1}
                            data-tooltip="View Auction"
                            className="button product_type_auction"
                            data-product_id={4472}
                            data-product_sku="BF001"
                            aria-label="Read more about “Desktop Gamer Las Vegas”"
                            rel="nofollow"
                          >
                            <i className="fa fa-eye" />
                          </a>
                        </div>
                        <div className="component wishlist hide-on-mobile">
                          <div className="yith-wcwl-add-to-wishlist add-to-wishlist-4472">
                            <div
                              className="yith-wcwl-add-button show"
                              style={{ display: "block" }}
                            >
                              <a
                                href="/product-category/phones/?add_to_wishlist=4472"
                                data-product-id={4472}
                                data-product-type="auction"
                                className="add_to_wishlist single_add_to_wishlist button "
                                data-tooltip="Add to Wishlist"
                              >
                                <i className="far fa-heart" />
                              </a>
                              <img
                                src="https://ibid.modeltheme.com/wp-admin/images/wpspin_light.gif"
                                className="ajax-loading"
                                alt="loading"
                                width={16}
                                height={16}
                                style={{ visibility: "hidden" }}
                              />
                            </div>
                            <div
                              className="yith-wcwl-wishlistaddedbrowse hide"
                              style={{ display: "none" }}
                            >
                              <a
                                href="https://ibid.modeltheme.com/wishlist/"
                                data-toggle="tooltip"
                                data-tooltip="Add to Wishlist Wishlist"
                                data-placement="top"
                                title="Browse Wishlist"
                              >
                                <i className="fas fa-heart" />{" "}
                              </a>
                            </div>
                            <div
                              className="yith-wcwl-wishlistexistsbrowse hide"
                              style={{ display: "none" }}
                            >
                              <a
                                href="https://ibid.modeltheme.com/wishlist/"
                                data-tooltip="Check Wishlist"
                                className="button"
                              >
                                <i className="fas fa-heart" />{" "}
                              </a>
                            </div>
                            <div style={{ clear: "both" }} />
                            <div className="yith-wcwl-wishlistaddresponse" />
                          </div>
                        </div>
                        <div className="component quick-view hide-on-mobile">
                          <a
                             href="/#"
                            className="button yith-wcqv-button"
                            data-tooltip="Quickview"
                            data-product_id={4472}
                          >
                            <i className="fas fa-search" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <a
                      className="woo_catalog_media_images"
                      title="Desktop Gamer Las Vegas"
                      href="https://ibid.modeltheme.com/product/desktop-ttz-gamer-lasvegas-v4-intel-coffee-lake-model/"
                    >
                      <img
                        width={300}
                        height={300}
                        src="https://ibid.modeltheme.com/wp-content/uploads/2018/09/desktop-product-1-300x300.jpg"
                        className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                        alt=""
                        loading="lazy"
                        srcSet="https://ibid.modeltheme.com/wp-content/uploads/2018/09/desktop-product-1-300x300.jpg 300w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/desktop-product-1-350x350.jpg 350w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/desktop-product-1-110x110.jpg 110w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/desktop-product-1-400x400.jpg 400w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/desktop-product-1.jpg 600w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/desktop-product-1-70x70.jpg 70w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/desktop-product-1-200x200.jpg 200w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/desktop-product-1-150x150.jpg 150w"
                        sizes="(max-width: 300px) 100vw, 300px"
                      />
                      <img
                        className="woo_secondary_media_image"
                        src="https://ibid.modeltheme.com/wp-content/uploads/2018/09/microsoft-tablet-1-400x400.jpg"
                        alt="Desktop Gamer Las Vegas"
                      />
                    </a>
                  </div>
                  <span className="auction-bage" />
                  <div className="woocommerce-title-metas" style={{}}>
                    <h3 className="archive-product-title">
                      <a href="https://ibid.modeltheme.com/product/desktop-ttz-gamer-lasvegas-v4-intel-coffee-lake-model/">
                        Desktop Gamer Las Vegas{" "}
                      </a>
                    </h3>
                    <div className="details-container">
                      <div className="details-price-container details-item">
                        <div className="woocommerce-product-details__short-description">
                          <p>
                            The Ragdoll is a cat breed with blue eyes and a
                            distinct colorpoint coat. It is a large and muscular
                            semi-longhair cat with a soft and silky coat. Like
                            all long haired cats, Ragdolls need grooming to
                            ensure their fur does not mat.
                          </p>
                        </div>
                        Auction Ended
                        <div className="details-review-container details-item" />
                        <div className="bottom-components">
                          <div className="component add-to-cart">
                            <a
                              href="https://ibid.modeltheme.com/product/desktop-ttz-gamer-lasvegas-v4-intel-coffee-lake-model/"
                              data-quantity={1}
                              data-tooltip="View Auction"
                              className="button product_type_auction"
                              data-product_id={4472}
                              data-product_sku="BF001"
                              aria-label="Read more about “Desktop Gamer Las Vegas”"
                              rel="nofollow"
                            >
                              <i className="fa fa-eye" />
                            </a>
                          </div>
                          <div className="component wishlist">
                            <div className="yith-wcwl-add-to-wishlist add-to-wishlist-4472">
                              <div
                                className="yith-wcwl-add-button show"
                                style={{ display: "block" }}
                              >
                                <a
                                  href="/product-category/phones/?add_to_wishlist=4472"
                                  data-product-id={4472}
                                  data-product-type="auction"
                                  className="add_to_wishlist single_add_to_wishlist button "
                                  data-tooltip="Add to Wishlist"
                                >
                                  <i className="far fa-heart" />
                                </a>
                                <img
                                  src="https://ibid.modeltheme.com/wp-admin/images/wpspin_light.gif"
                                  className="ajax-loading"
                                  alt="loading"
                                  width={16}
                                  height={16}
                                  style={{ visibility: "hidden" }}
                                />
                              </div>
                              <div
                                className="yith-wcwl-wishlistaddedbrowse hide"
                                style={{ display: "none" }}
                              >
                                <a
                                  href="https://ibid.modeltheme.com/wishlist/"
                                  data-toggle="tooltip"
                                  data-tooltip="Add to Wishlist Wishlist"
                                  data-placement="top"
                                  title="Browse Wishlist"
                                >
                                  <i className="fas fa-heart" />{" "}
                                </a>
                              </div>
                              <div
                                className="yith-wcwl-wishlistexistsbrowse hide"
                                style={{ display: "none" }}
                              >
                                <a
                                  href="https://ibid.modeltheme.com/wishlist/"
                                  data-tooltip="Check Wishlist"
                                  className="button"
                                >
                                  <i className="fas fa-heart" />{" "}
                                </a>
                              </div>
                              <div style={{ clear: "both" }} />
                              <div className="yith-wcwl-wishlistaddresponse" />
                            </div>
                          </div>
                          <div className="component quick-view">
                            <a
                               href="/#"
                              className="button yith-wcqv-button"
                              data-tooltip="Quickview"
                              data-product_id={4472}
                            >
                              <i className="fas fa-search" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bottom-components-list">
                      <div className="component add-to-cart">
                        <a
                          href="https://ibid.modeltheme.com/product/desktop-ttz-gamer-lasvegas-v4-intel-coffee-lake-model/"
                          data-quantity={1}
                          data-tooltip="View Auction"
                          className="button product_type_auction"
                          data-product_id={4472}
                          data-product_sku="BF001"
                          aria-label="Read more about “Desktop Gamer Las Vegas”"
                          rel="nofollow"
                        >
                          <i className="fa fa-eye" />
                        </a>
                      </div>
                      <div className="component wishlist">
                        <div className="yith-wcwl-add-to-wishlist add-to-wishlist-4472">
                          <div
                            className="yith-wcwl-add-button show"
                            style={{ display: "block" }}
                          >
                            <a
                              href="/product-category/phones/?add_to_wishlist=4472"
                              data-product-id={4472}
                              data-product-type="auction"
                              className="add_to_wishlist single_add_to_wishlist button "
                              data-tooltip="Add to Wishlist"
                            >
                              <i className="far fa-heart" />
                            </a>
                            <img
                              src="https://ibid.modeltheme.com/wp-admin/images/wpspin_light.gif"
                              className="ajax-loading"
                              alt="loading"
                              width={16}
                              height={16}
                              style={{ visibility: "hidden" }}
                            />
                          </div>
                          <div
                            className="yith-wcwl-wishlistaddedbrowse hide"
                            style={{ display: "none" }}
                          >
                            <a
                              href="https://ibid.modeltheme.com/wishlist/"
                              data-toggle="tooltip"
                              data-tooltip="Add to Wishlist Wishlist"
                              data-placement="top"
                              title="Browse Wishlist"
                            >
                              <i className="fas fa-heart" />{" "}
                            </a>
                          </div>
                          <div
                            className="yith-wcwl-wishlistexistsbrowse hide"
                            style={{ display: "none" }}
                          >
                            <a
                              href="https://ibid.modeltheme.com/wishlist/"
                              data-tooltip="Check Wishlist"
                              className="button"
                            >
                              <i className="fas fa-heart" />{" "}
                            </a>
                          </div>
                          <div style={{ clear: "both" }} />
                          <div className="yith-wcwl-wishlistaddresponse" />
                        </div>
                      </div>
                      <div className="component quick-view">
                        <a
                           href="/#"
                          className="button yith-wcqv-button"
                          data-tooltip="Quickview"
                          data-product_id={4472}
                        >
                          <i className="fas fa-search" />
                        </a>
                      </div>
                    </div>{" "}
                  </div>
                </div>
              </li>
              <li className=" last post-4471 product type-product status-publish has-post-thumbnail product_cat-electronics product_cat-phones product_tag-black-friday product_tag-sales first instock sold-individually shipping-taxable product-type-auction">
                <div className="products-wrapper">
                  <div className="thumbnail-and-details">
                    <div className="overlay-container">
                      <div className="thumbnail-overlay" />
                      <div className="overlay-components">
                        <div className="component add-to-cart">
                          <a
                            href="https://ibid.modeltheme.com/product/desktop-ttx-gamer-lasvegas-v3-intel-coffee-lake-model/"
                            data-quantity={1}
                            data-tooltip="View Auction"
                            className="button product_type_auction"
                            data-product_id={4471}
                            data-product_sku="BF005"
                            aria-label="Read more about “Desktop TTX Gamer”"
                            rel="nofollow"
                          >
                            <i className="fa fa-eye" />
                          </a>
                        </div>
                        <div className="component wishlist hide-on-mobile">
                          <div className="yith-wcwl-add-to-wishlist add-to-wishlist-4471">
                            <div
                              className="yith-wcwl-add-button show"
                              style={{ display: "block" }}
                            >
                              <a
                                href="/product-category/phones/?add_to_wishlist=4471"
                                data-product-id={4471}
                                data-product-type="auction"
                                className="add_to_wishlist single_add_to_wishlist button "
                                data-tooltip="Add to Wishlist"
                              >
                                <i className="far fa-heart" />
                              </a>
                              <img
                                src="https://ibid.modeltheme.com/wp-admin/images/wpspin_light.gif"
                                className="ajax-loading"
                                alt="loading"
                                width={16}
                                height={16}
                                style={{ visibility: "hidden" }}
                              />
                            </div>
                            <div
                              className="yith-wcwl-wishlistaddedbrowse hide"
                              style={{ display: "none" }}
                            >
                              <a
                                href="https://ibid.modeltheme.com/wishlist/"
                                data-toggle="tooltip"
                                data-tooltip="Add to Wishlist Wishlist"
                                data-placement="top"
                                title="Browse Wishlist"
                              >
                                <i className="fas fa-heart" />{" "}
                              </a>
                            </div>
                            <div
                              className="yith-wcwl-wishlistexistsbrowse hide"
                              style={{ display: "none" }}
                            >
                              <a
                                href="https://ibid.modeltheme.com/wishlist/"
                                data-tooltip="Check Wishlist"
                                className="button"
                              >
                                <i className="fas fa-heart" />{" "}
                              </a>
                            </div>
                            <div style={{ clear: "both" }} />
                            <div className="yith-wcwl-wishlistaddresponse" />
                          </div>
                        </div>
                        <div className="component quick-view hide-on-mobile">
                          <a
                             href="/#"
                            className="button yith-wcqv-button"
                            data-tooltip="Quickview"
                            data-product_id={4471}
                          >
                            <i className="fas fa-search" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <a
                      className="woo_catalog_media_images"
                      title="Desktop TTX Gamer"
                      href="https://ibid.modeltheme.com/product/desktop-ttx-gamer-lasvegas-v3-intel-coffee-lake-model/"
                    >
                      <img
                        width={300}
                        height={300}
                        src="https://ibid.modeltheme.com/wp-content/uploads/2018/09/desktop-product-1-300x300.jpg"
                        className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                        alt=""
                        loading="lazy"
                        srcSet="https://ibid.modeltheme.com/wp-content/uploads/2018/09/desktop-product-1-300x300.jpg 300w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/desktop-product-1-350x350.jpg 350w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/desktop-product-1-110x110.jpg 110w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/desktop-product-1-400x400.jpg 400w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/desktop-product-1.jpg 600w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/desktop-product-1-70x70.jpg 70w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/desktop-product-1-200x200.jpg 200w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/desktop-product-1-150x150.jpg 150w"
                        sizes="(max-width: 300px) 100vw, 300px"
                      />
                      <img
                        className="woo_secondary_media_image"
                        src="https://ibid.modeltheme.com/wp-content/uploads/2018/09/electronic-cat3-400x400.jpg"
                        alt="Desktop TTX Gamer"
                      />
                    </a>
                  </div>
                  <span className="auction-bage" />
                  <div className="woocommerce-title-metas" style={{}}>
                    <h3 className="archive-product-title">
                      <a href="https://ibid.modeltheme.com/product/desktop-ttx-gamer-lasvegas-v3-intel-coffee-lake-model/">
                        Desktop TTX Gamer{" "}
                      </a>
                    </h3>
                    <div className="details-container">
                      <div className="details-price-container details-item">
                        <div className="woocommerce-product-details__short-description">
                          <p>
                            The name “Ragdoll” is derived from the tendency of
                            individuals from the original breeding stock to go
                            limp and relaxed when picked up. Particularly
                            popular in both the United Kingdom and the breed
                          </p>
                        </div>
                        Auction Ended
                        <div className="details-review-container details-item" />
                        <div className="bottom-components">
                          <div className="component add-to-cart">
                            <a
                              href="https://ibid.modeltheme.com/product/desktop-ttx-gamer-lasvegas-v3-intel-coffee-lake-model/"
                              data-quantity={1}
                              data-tooltip="View Auction"
                              className="button product_type_auction"
                              data-product_id={4471}
                              data-product_sku="BF005"
                              aria-label="Read more about “Desktop TTX Gamer”"
                              rel="nofollow"
                            >
                              <i className="fa fa-eye" />
                            </a>
                          </div>
                          <div className="component wishlist">
                            <div className="yith-wcwl-add-to-wishlist add-to-wishlist-4471">
                              <div
                                className="yith-wcwl-add-button show"
                                style={{ display: "block" }}
                              >
                                <a
                                  href="/product-category/phones/?add_to_wishlist=4471"
                                  data-product-id={4471}
                                  data-product-type="auction"
                                  className="add_to_wishlist single_add_to_wishlist button "
                                  data-tooltip="Add to Wishlist"
                                >
                                  <i className="far fa-heart" />
                                </a>
                                <img
                                  src="https://ibid.modeltheme.com/wp-admin/images/wpspin_light.gif"
                                  className="ajax-loading"
                                  alt="loading"
                                  width={16}
                                  height={16}
                                  style={{ visibility: "hidden" }}
                                />
                              </div>
                              <div
                                className="yith-wcwl-wishlistaddedbrowse hide"
                                style={{ display: "none" }}
                              >
                                <a
                                  href="https://ibid.modeltheme.com/wishlist/"
                                  data-toggle="tooltip"
                                  data-tooltip="Add to Wishlist Wishlist"
                                  data-placement="top"
                                  title="Browse Wishlist"
                                >
                                  <i className="fas fa-heart" />{" "}
                                </a>
                              </div>
                              <div
                                className="yith-wcwl-wishlistexistsbrowse hide"
                                style={{ display: "none" }}
                              >
                                <a
                                  href="https://ibid.modeltheme.com/wishlist/"
                                  data-tooltip="Check Wishlist"
                                  className="button"
                                >
                                  <i className="fas fa-heart" />{" "}
                                </a>
                              </div>
                              <div style={{ clear: "both" }} />
                              <div className="yith-wcwl-wishlistaddresponse" />
                            </div>
                          </div>
                          <div className="component quick-view">
                            <a
                               href="/#"
                              className="button yith-wcqv-button"
                              data-tooltip="Quickview"
                              data-product_id={4471}
                            >
                              <i className="fas fa-search" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bottom-components-list">
                      <div className="component add-to-cart">
                        <a
                          href="https://ibid.modeltheme.com/product/desktop-ttx-gamer-lasvegas-v3-intel-coffee-lake-model/"
                          data-quantity={1}
                          data-tooltip="View Auction"
                          className="button product_type_auction"
                          data-product_id={4471}
                          data-product_sku="BF005"
                          aria-label="Read more about “Desktop TTX Gamer”"
                          rel="nofollow"
                        >
                          <i className="fa fa-eye" />
                        </a>
                      </div>
                      <div className="component wishlist">
                        <div className="yith-wcwl-add-to-wishlist add-to-wishlist-4471">
                          <div
                            className="yith-wcwl-add-button show"
                            style={{ display: "block" }}
                          >
                            <a
                              href="/product-category/phones/?add_to_wishlist=4471"
                              data-product-id={4471}
                              data-product-type="auction"
                              className="add_to_wishlist single_add_to_wishlist button "
                              data-tooltip="Add to Wishlist"
                            >
                              <i className="far fa-heart" />
                            </a>
                            <img
                              src="https://ibid.modeltheme.com/wp-admin/images/wpspin_light.gif"
                              className="ajax-loading"
                              alt="loading"
                              width={16}
                              height={16}
                              style={{ visibility: "hidden" }}
                            />
                          </div>
                          <div
                            className="yith-wcwl-wishlistaddedbrowse hide"
                            style={{ display: "none" }}
                          >
                            <a
                              href="https://ibid.modeltheme.com/wishlist/"
                              data-toggle="tooltip"
                              data-tooltip="Add to Wishlist Wishlist"
                              data-placement="top"
                              title="Browse Wishlist"
                            >
                              <i className="fas fa-heart" />{" "}
                            </a>
                          </div>
                          <div
                            className="yith-wcwl-wishlistexistsbrowse hide"
                            style={{ display: "none" }}
                          >
                            <a
                              href="https://ibid.modeltheme.com/wishlist/"
                              data-tooltip="Check Wishlist"
                              className="button"
                            >
                              <i className="fas fa-heart" />{" "}
                            </a>
                          </div>
                          <div style={{ clear: "both" }} />
                          <div className="yith-wcwl-wishlistaddresponse" />
                        </div>
                      </div>
                      <div className="component quick-view">
                        <a
                           href="/#"
                          className="button yith-wcqv-button"
                          data-tooltip="Quickview"
                          data-product_id={4471}
                        >
                          <i className="fas fa-search" />
                        </a>
                      </div>
                    </div>{" "}
                  </div>
                </div>
              </li>
              <li className=" post-4473 product type-product status-publish has-post-thumbnail product_cat-phones product_tag-black-friday product_tag-sales last outofstock sold-individually shipping-taxable product-type-auction">
                <div className="products-wrapper">
                  <div className="thumbnail-and-details">
                    <div className="overlay-container">
                      <div className="thumbnail-overlay" />
                      <div className="overlay-components">
                        <div className="component add-to-cart">
                          <a
                            href="https://ibid.modeltheme.com/product/smartphone-samsung-galaxy-s10-dual-sim/"
                            data-quantity={1}
                            data-tooltip="View Auction"
                            className="button product_type_auction"
                            data-product_id={4473}
                            data-product_sku="BF002"
                            aria-label="Read more about “Galaxy S10+ Dual SIM”"
                            rel="nofollow"
                          >
                            <i className="fa fa-eye" />
                          </a>
                        </div>
                        <div className="component wishlist hide-on-mobile">
                          <div className="yith-wcwl-add-to-wishlist add-to-wishlist-4473">
                            <div
                              className="yith-wcwl-add-button show"
                              style={{ display: "block" }}
                            >
                              <a
                                href="/product-category/phones/?add_to_wishlist=4473"
                                data-product-id={4473}
                                data-product-type="auction"
                                className="add_to_wishlist single_add_to_wishlist button "
                                data-tooltip="Add to Wishlist"
                              >
                                <i className="far fa-heart" />
                              </a>
                              <img
                                src="https://ibid.modeltheme.com/wp-admin/images/wpspin_light.gif"
                                className="ajax-loading"
                                alt="loading"
                                width={16}
                                height={16}
                                style={{ visibility: "hidden" }}
                              />
                            </div>
                            <div
                              className="yith-wcwl-wishlistaddedbrowse hide"
                              style={{ display: "none" }}
                            >
                              <a
                                href="https://ibid.modeltheme.com/wishlist/"
                                data-toggle="tooltip"
                                data-tooltip="Add to Wishlist Wishlist"
                                data-placement="top"
                                title="Browse Wishlist"
                              >
                                <i className="fas fa-heart" />{" "}
                              </a>
                            </div>
                            <div
                              className="yith-wcwl-wishlistexistsbrowse hide"
                              style={{ display: "none" }}
                            >
                              <a
                                href="https://ibid.modeltheme.com/wishlist/"
                                data-tooltip="Check Wishlist"
                                className="button"
                              >
                                <i className="fas fa-heart" />{" "}
                              </a>
                            </div>
                            <div style={{ clear: "both" }} />
                            <div className="yith-wcwl-wishlistaddresponse" />
                          </div>
                        </div>
                        <div className="component quick-view hide-on-mobile">
                          <a
                             href="/#"
                            className="button yith-wcqv-button"
                            data-tooltip="Quickview"
                            data-product_id={4473}
                          >
                            <i className="fas fa-search" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <a
                      className="woo_catalog_media_images"
                      title="Galaxy S10+ Dual SIM"
                      href="https://ibid.modeltheme.com/product/smartphone-samsung-galaxy-s10-dual-sim/"
                    >
                      <img
                        width={300}
                        height={300}
                        src="https://ibid.modeltheme.com/wp-content/uploads/2018/09/phone-cat1-300x300.jpg"
                        className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                        alt=""
                        loading="lazy"
                        srcSet="https://ibid.modeltheme.com/wp-content/uploads/2018/09/phone-cat1-300x300.jpg 300w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/phone-cat1-200x200.jpg 200w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/phone-cat1-600x600.jpg 600w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/phone-cat1-150x150.jpg 150w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/phone-cat1-768x768.jpg 768w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/phone-cat1-1024x1024.jpg 1024w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/phone-cat1-350x350.jpg 350w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/phone-cat1-110x110.jpg 110w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/phone-cat1-400x400.jpg 400w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/phone-cat1-70x70.jpg 70w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/phone-cat1.jpg 1080w"
                        sizes="(max-width: 300px) 100vw, 300px"
                      />
                      <img
                        className="woo_secondary_media_image"
                        src="https://ibid.modeltheme.com/wp-content/uploads/2018/10/electronic-cat1-400x400.jpg"
                        alt="Galaxy S10+ Dual SIM"
                      />
                    </a>
                  </div>
                  <span className="auction-bage" />
                  <div className="woocommerce-title-metas" style={{}}>
                    <h3 className="archive-product-title">
                      <a href="https://ibid.modeltheme.com/product/smartphone-samsung-galaxy-s10-dual-sim/">
                        Galaxy S10+ Dual SIM{" "}
                      </a>
                    </h3>
                    <div className="details-container">
                      <div className="details-price-container details-item">
                        <div className="woocommerce-product-details__short-description">
                          <p>
                            Bring to the table win-win survival strategies to
                            ensure proactive domination. At the end of the day.
                            Override the digital divide with
                          </p>
                        </div>
                        Auction Ended
                        <div className="details-review-container details-item" />
                        <div className="bottom-components">
                          <div className="component add-to-cart">
                            <a
                              href="https://ibid.modeltheme.com/product/smartphone-samsung-galaxy-s10-dual-sim/"
                              data-quantity={1}
                              data-tooltip="View Auction"
                              className="button product_type_auction"
                              data-product_id={4473}
                              data-product_sku="BF002"
                              aria-label="Read more about “Galaxy S10+ Dual SIM”"
                              rel="nofollow"
                            >
                              <i className="fa fa-eye" />
                            </a>
                          </div>
                          <div className="component wishlist">
                            <div className="yith-wcwl-add-to-wishlist add-to-wishlist-4473">
                              <div
                                className="yith-wcwl-add-button show"
                                style={{ display: "block" }}
                              >
                                <a
                                  href="/product-category/phones/?add_to_wishlist=4473"
                                  data-product-id={4473}
                                  data-product-type="auction"
                                  className="add_to_wishlist single_add_to_wishlist button "
                                  data-tooltip="Add to Wishlist"
                                >
                                  <i className="far fa-heart" />
                                </a>
                                <img
                                  src="https://ibid.modeltheme.com/wp-admin/images/wpspin_light.gif"
                                  className="ajax-loading"
                                  alt="loading"
                                  width={16}
                                  height={16}
                                  style={{ visibility: "hidden" }}
                                />
                              </div>
                              <div
                                className="yith-wcwl-wishlistaddedbrowse hide"
                                style={{ display: "none" }}
                              >
                                <a
                                  href="https://ibid.modeltheme.com/wishlist/"
                                  data-toggle="tooltip"
                                  data-tooltip="Add to Wishlist Wishlist"
                                  data-placement="top"
                                  title="Browse Wishlist"
                                >
                                  <i className="fas fa-heart" />{" "}
                                </a>
                              </div>
                              <div
                                className="yith-wcwl-wishlistexistsbrowse hide"
                                style={{ display: "none" }}
                              >
                                <a
                                  href="https://ibid.modeltheme.com/wishlist/"
                                  data-tooltip="Check Wishlist"
                                  className="button"
                                >
                                  <i className="fas fa-heart" />{" "}
                                </a>
                              </div>
                              <div style={{ clear: "both" }} />
                              <div className="yith-wcwl-wishlistaddresponse" />
                            </div>
                          </div>
                          <div className="component quick-view">
                            <a
                               href="/#"
                              className="button yith-wcqv-button"
                              data-tooltip="Quickview"
                              data-product_id={4473}
                            >
                              <i className="fas fa-search" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bottom-components-list">
                      <div className="component add-to-cart">
                        <a
                          href="https://ibid.modeltheme.com/product/smartphone-samsung-galaxy-s10-dual-sim/"
                          data-quantity={1}
                          data-tooltip="View Auction"
                          className="button product_type_auction"
                          data-product_id={4473}
                          data-product_sku="BF002"
                          aria-label="Read more about “Galaxy S10+ Dual SIM”"
                          rel="nofollow"
                        >
                          <i className="fa fa-eye" />
                        </a>
                      </div>
                      <div className="component wishlist">
                        <div className="yith-wcwl-add-to-wishlist add-to-wishlist-4473">
                          <div
                            className="yith-wcwl-add-button show"
                            style={{ display: "block" }}
                          >
                            <a
                              href="/product-category/phones/?add_to_wishlist=4473"
                              data-product-id={4473}
                              data-product-type="auction"
                              className="add_to_wishlist single_add_to_wishlist button "
                              data-tooltip="Add to Wishlist"
                            >
                              <i className="far fa-heart" />
                            </a>
                            <img
                              src="https://ibid.modeltheme.com/wp-admin/images/wpspin_light.gif"
                              className="ajax-loading"
                              alt="loading"
                              width={16}
                              height={16}
                              style={{ visibility: "hidden" }}
                            />
                          </div>
                          <div
                            className="yith-wcwl-wishlistaddedbrowse hide"
                            style={{ display: "none" }}
                          >
                            <a
                              href="https://ibid.modeltheme.com/wishlist/"
                              data-toggle="tooltip"
                              data-tooltip="Add to Wishlist Wishlist"
                              data-placement="top"
                              title="Browse Wishlist"
                            >
                              <i className="fas fa-heart" />{" "}
                            </a>
                          </div>
                          <div
                            className="yith-wcwl-wishlistexistsbrowse hide"
                            style={{ display: "none" }}
                          >
                            <a
                              href="https://ibid.modeltheme.com/wishlist/"
                              data-tooltip="Check Wishlist"
                              className="button"
                            >
                              <i className="fas fa-heart" />{" "}
                            </a>
                          </div>
                          <div style={{ clear: "both" }} />
                          <div className="yith-wcwl-wishlistaddresponse" />
                        </div>
                      </div>
                      <div className="component quick-view">
                        <a
                           href="/#"
                          className="button yith-wcqv-button"
                          data-tooltip="Quickview"
                          data-product_id={4473}
                        >
                          <i className="fas fa-search" />
                        </a>
                      </div>
                    </div>{" "}
                  </div>
                </div>
              </li>
              <li className="clearfix hide-on-mobile" />
              <li className=" first post-4469 product type-product status-publish has-post-thumbnail product_cat-electronics product_cat-laptops product_cat-phones product_tag-black-friday product_tag-sales outofstock featured sold-individually shipping-taxable product-type-auction">
                <div className="products-wrapper">
                  <div className="thumbnail-and-details">
                    <div className="overlay-container">
                      <div className="thumbnail-overlay" />
                      <div className="overlay-components">
                        <div className="component add-to-cart">
                          <a
                            href="https://ibid.modeltheme.com/product/desktop-ttx-gamer-lasvegas-v2-intel-coffee-lake-model/"
                            data-quantity={1}
                            data-tooltip="View Auction"
                            className="button product_type_auction"
                            data-product_id={4469}
                            data-product_sku="BF007"
                            aria-label="Read more about “Gaming Computer”"
                            rel="nofollow"
                          >
                            <i className="fa fa-eye" />
                          </a>
                        </div>
                        <div className="component wishlist hide-on-mobile">
                          <div className="yith-wcwl-add-to-wishlist add-to-wishlist-4469">
                            <div
                              className="yith-wcwl-add-button show"
                              style={{ display: "block" }}
                            >
                              <a
                                href="/product-category/phones/?add_to_wishlist=4469"
                                data-product-id={4469}
                                data-product-type="auction"
                                className="add_to_wishlist single_add_to_wishlist button "
                                data-tooltip="Add to Wishlist"
                              >
                                <i className="far fa-heart" />
                              </a>
                              <img
                                src="https://ibid.modeltheme.com/wp-admin/images/wpspin_light.gif"
                                className="ajax-loading"
                                alt="loading"
                                width={16}
                                height={16}
                                style={{ visibility: "hidden" }}
                              />
                            </div>
                            <div
                              className="yith-wcwl-wishlistaddedbrowse hide"
                              style={{ display: "none" }}
                            >
                              <a
                                href="https://ibid.modeltheme.com/wishlist/"
                                data-toggle="tooltip"
                                data-tooltip="Add to Wishlist Wishlist"
                                data-placement="top"
                                title="Browse Wishlist"
                              >
                                <i className="fas fa-heart" />{" "}
                              </a>
                            </div>
                            <div
                              className="yith-wcwl-wishlistexistsbrowse hide"
                              style={{ display: "none" }}
                            >
                              <a
                                href="https://ibid.modeltheme.com/wishlist/"
                                data-tooltip="Check Wishlist"
                                className="button"
                              >
                                <i className="fas fa-heart" />{" "}
                              </a>
                            </div>
                            <div style={{ clear: "both" }} />
                            <div className="yith-wcwl-wishlistaddresponse" />
                          </div>
                        </div>
                        <div className="component quick-view hide-on-mobile">
                          <a
                             href="/#"
                            className="button yith-wcqv-button"
                            data-tooltip="Quickview"
                            data-product_id={4469}
                          >
                            <i className="fas fa-search" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <a
                      className="woo_catalog_media_images"
                      title="Gaming Computer"
                      href="https://ibid.modeltheme.com/product/desktop-ttx-gamer-lasvegas-v2-intel-coffee-lake-model/"
                    >
                      <img
                        width={300}
                        height={300}
                        src="https://ibid.modeltheme.com/wp-content/uploads/2018/09/desktop-product-1-300x300.jpg"
                        className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                        alt=""
                        loading="lazy"
                        srcSet="https://ibid.modeltheme.com/wp-content/uploads/2018/09/desktop-product-1-300x300.jpg 300w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/desktop-product-1-350x350.jpg 350w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/desktop-product-1-110x110.jpg 110w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/desktop-product-1-400x400.jpg 400w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/desktop-product-1.jpg 600w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/desktop-product-1-70x70.jpg 70w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/desktop-product-1-200x200.jpg 200w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/desktop-product-1-150x150.jpg 150w"
                        sizes="(max-width: 300px) 100vw, 300px"
                      />
                      <img
                        className="woo_secondary_media_image"
                        src="https://ibid.modeltheme.com/wp-content/uploads/2018/09/electronic-cat4-400x400.jpg"
                        alt="Gaming Computer"
                      />
                    </a>
                  </div>
                  <span className="auction-bage" />
                  <div className="woocommerce-title-metas" style={{}}>
                    <h3 className="archive-product-title">
                      <a href="https://ibid.modeltheme.com/product/desktop-ttx-gamer-lasvegas-v2-intel-coffee-lake-model/">
                        Gaming Computer{" "}
                      </a>
                    </h3>
                    <div className="details-container">
                      <div className="details-price-container details-item">
                        <div className="woocommerce-product-details__short-description">
                          <p>
                            Bring to the table win-win survival strategies to
                            ensure proactive domination. At the end of the day.
                            Override the digital divide with
                          </p>
                        </div>
                        Auction Ended
                        <div className="details-review-container details-item" />
                        <div className="bottom-components">
                          <div className="component add-to-cart">
                            <a
                              href="https://ibid.modeltheme.com/product/desktop-ttx-gamer-lasvegas-v2-intel-coffee-lake-model/"
                              data-quantity={1}
                              data-tooltip="View Auction"
                              className="button product_type_auction"
                              data-product_id={4469}
                              data-product_sku="BF007"
                              aria-label="Read more about “Gaming Computer”"
                              rel="nofollow"
                            >
                              <i className="fa fa-eye" />
                            </a>
                          </div>
                          <div className="component wishlist">
                            <div className="yith-wcwl-add-to-wishlist add-to-wishlist-4469">
                              <div
                                className="yith-wcwl-add-button show"
                                style={{ display: "block" }}
                              >
                                <a
                                  href="/product-category/phones/?add_to_wishlist=4469"
                                  data-product-id={4469}
                                  data-product-type="auction"
                                  className="add_to_wishlist single_add_to_wishlist button "
                                  data-tooltip="Add to Wishlist"
                                >
                                  <i className="far fa-heart" />
                                </a>
                                <img
                                  src="https://ibid.modeltheme.com/wp-admin/images/wpspin_light.gif"
                                  className="ajax-loading"
                                  alt="loading"
                                  width={16}
                                  height={16}
                                  style={{ visibility: "hidden" }}
                                />
                              </div>
                              <div
                                className="yith-wcwl-wishlistaddedbrowse hide"
                                style={{ display: "none" }}
                              >
                                <a
                                  href="https://ibid.modeltheme.com/wishlist/"
                                  data-toggle="tooltip"
                                  data-tooltip="Add to Wishlist Wishlist"
                                  data-placement="top"
                                  title="Browse Wishlist"
                                >
                                  <i className="fas fa-heart" />{" "}
                                </a>
                              </div>
                              <div
                                className="yith-wcwl-wishlistexistsbrowse hide"
                                style={{ display: "none" }}
                              >
                                <a
                                  href="https://ibid.modeltheme.com/wishlist/"
                                  data-tooltip="Check Wishlist"
                                  className="button"
                                >
                                  <i className="fas fa-heart" />{" "}
                                </a>
                              </div>
                              <div style={{ clear: "both" }} />
                              <div className="yith-wcwl-wishlistaddresponse" />
                            </div>
                          </div>
                          <div className="component quick-view">
                            <a
                               href="/#"
                              className="button yith-wcqv-button"
                              data-tooltip="Quickview"
                              data-product_id={4469}
                            >
                              <i className="fas fa-search" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bottom-components-list">
                      <div className="component add-to-cart">
                        <a
                          href="https://ibid.modeltheme.com/product/desktop-ttx-gamer-lasvegas-v2-intel-coffee-lake-model/"
                          data-quantity={1}
                          data-tooltip="View Auction"
                          className="button product_type_auction"
                          data-product_id={4469}
                          data-product_sku="BF007"
                          aria-label="Read more about “Gaming Computer”"
                          rel="nofollow"
                        >
                          <i className="fa fa-eye" />
                        </a>
                      </div>
                      <div className="component wishlist">
                        <div className="yith-wcwl-add-to-wishlist add-to-wishlist-4469">
                          <div
                            className="yith-wcwl-add-button show"
                            style={{ display: "block" }}
                          >
                            <a
                              href="/product-category/phones/?add_to_wishlist=4469"
                              data-product-id={4469}
                              data-product-type="auction"
                              className="add_to_wishlist single_add_to_wishlist button "
                              data-tooltip="Add to Wishlist"
                            >
                              <i className="far fa-heart" />
                            </a>
                            <img
                              src="https://ibid.modeltheme.com/wp-admin/images/wpspin_light.gif"
                              className="ajax-loading"
                              alt="loading"
                              width={16}
                              height={16}
                              style={{ visibility: "hidden" }}
                            />
                          </div>
                          <div
                            className="yith-wcwl-wishlistaddedbrowse hide"
                            style={{ display: "none" }}
                          >
                            <a
                              href="https://ibid.modeltheme.com/wishlist/"
                              data-toggle="tooltip"
                              data-tooltip="Add to Wishlist Wishlist"
                              data-placement="top"
                              title="Browse Wishlist"
                            >
                              <i className="fas fa-heart" />{" "}
                            </a>
                          </div>
                          <div
                            className="yith-wcwl-wishlistexistsbrowse hide"
                            style={{ display: "none" }}
                          >
                            <a
                              href="https://ibid.modeltheme.com/wishlist/"
                              data-tooltip="Check Wishlist"
                              className="button"
                            >
                              <i className="fas fa-heart" />{" "}
                            </a>
                          </div>
                          <div style={{ clear: "both" }} />
                          <div className="yith-wcwl-wishlistaddresponse" />
                        </div>
                      </div>
                      <div className="component quick-view">
                        <a
                           href="/#"
                          className="button yith-wcqv-button"
                          data-tooltip="Quickview"
                          data-product_id={4469}
                        >
                          <i className="fas fa-search" />
                        </a>
                      </div>
                    </div>{" "}
                  </div>
                </div>
              </li>
              <li className=" last post-4461 product type-product status-publish has-post-thumbnail product_cat-data-cables-phones product_cat-laptops product_tag-black-friday product_tag-sales first instock sold-individually shipping-taxable product-type-auction">
                <div className="products-wrapper">
                  <div className="thumbnail-and-details">
                    <div className="overlay-container">
                      <div className="thumbnail-overlay" />
                      <div className="overlay-components">
                        <div className="component add-to-cart">
                          <a
                            href="https://ibid.modeltheme.com/product/laptop-inspiron-core-i7/"
                            data-quantity={1}
                            data-tooltip="View Auction"
                            className="button product_type_auction"
                            data-product_id={4461}
                            data-product_sku="BF012"
                            aria-label="Read more about “Laptop Inspiron Core i7”"
                            rel="nofollow"
                          >
                            <i className="fa fa-eye" />
                          </a>
                        </div>
                        <div className="component wishlist hide-on-mobile">
                          <div className="yith-wcwl-add-to-wishlist add-to-wishlist-4461">
                            <div
                              className="yith-wcwl-add-button show"
                              style={{ display: "block" }}
                            >
                              <a
                                href="/product-category/phones/?add_to_wishlist=4461"
                                data-product-id={4461}
                                data-product-type="auction"
                                className="add_to_wishlist single_add_to_wishlist button "
                                data-tooltip="Add to Wishlist"
                              >
                                <i className="far fa-heart" />
                              </a>
                              <img
                                src="https://ibid.modeltheme.com/wp-admin/images/wpspin_light.gif"
                                className="ajax-loading"
                                alt="loading"
                                width={16}
                                height={16}
                                style={{ visibility: "hidden" }}
                              />
                            </div>
                            <div
                              className="yith-wcwl-wishlistaddedbrowse hide"
                              style={{ display: "none" }}
                            >
                              <a
                                href="https://ibid.modeltheme.com/wishlist/"
                                data-toggle="tooltip"
                                data-tooltip="Add to Wishlist Wishlist"
                                data-placement="top"
                                title="Browse Wishlist"
                              >
                                <i className="fas fa-heart" />{" "}
                              </a>
                            </div>
                            <div
                              className="yith-wcwl-wishlistexistsbrowse hide"
                              style={{ display: "none" }}
                            >
                              <a
                                href="https://ibid.modeltheme.com/wishlist/"
                                data-tooltip="Check Wishlist"
                                className="button"
                              >
                                <i className="fas fa-heart" />{" "}
                              </a>
                            </div>
                            <div style={{ clear: "both" }} />
                            <div className="yith-wcwl-wishlistaddresponse" />
                          </div>
                        </div>
                        <div className="component quick-view hide-on-mobile">
                          <a
                             href="/#"
                            className="button yith-wcqv-button"
                            data-tooltip="Quickview"
                            data-product_id={4461}
                          >
                            <i className="fas fa-search" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <a
                      className="woo_catalog_media_images"
                      title="Laptop Inspiron Core i7"
                      href="https://ibid.modeltheme.com/product/laptop-inspiron-core-i7/"
                    >
                      <img
                        width={300}
                        height={300}
                        src="https://ibid.modeltheme.com/wp-content/uploads/2018/09/asus-laptop-1-300x300.jpg"
                        className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                        alt=""
                        loading="lazy"
                        srcSet="https://ibid.modeltheme.com/wp-content/uploads/2018/09/asus-laptop-1-300x300.jpg 300w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/asus-laptop-1-350x350.jpg 350w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/asus-laptop-1-110x110.jpg 110w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/asus-laptop-1-400x400.jpg 400w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/asus-laptop-1.jpg 600w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/asus-laptop-1-70x70.jpg 70w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/asus-laptop-1-200x200.jpg 200w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/asus-laptop-1-150x150.jpg 150w"
                        sizes="(max-width: 300px) 100vw, 300px"
                      />
                      <img
                        className="woo_secondary_media_image"
                        src="https://ibid.modeltheme.com/wp-content/uploads/2018/10/electronic-cat1-400x400.jpg"
                        alt="Laptop Inspiron Core i7"
                      />
                    </a>
                  </div>
                  <span className="auction-bage" />
                  <div className="woocommerce-title-metas" style={{}}>
                    <h3 className="archive-product-title">
                      <a href="https://ibid.modeltheme.com/product/laptop-inspiron-core-i7/">
                        Laptop Inspiron Core i7{" "}
                      </a>
                    </h3>
                    <div className="details-container">
                      <div className="details-price-container details-item">
                        <div className="woocommerce-product-details__short-description">
                          <p>
                            Product galati a reality sandwich before you walk
                            back in that boardroom fire up your browser, so come
                            up with something buzzworthy, for it’s about
                            managing expectations yet baseline into the weeds.
                          </p>
                        </div>
                        Auction Ended
                        <div className="details-review-container details-item" />
                        <div className="bottom-components">
                          <div className="component add-to-cart">
                            <a
                              href="https://ibid.modeltheme.com/product/laptop-inspiron-core-i7/"
                              data-quantity={1}
                              data-tooltip="View Auction"
                              className="button product_type_auction"
                              data-product_id={4461}
                              data-product_sku="BF012"
                              aria-label="Read more about “Laptop Inspiron Core i7”"
                              rel="nofollow"
                            >
                              <i className="fa fa-eye" />
                            </a>
                          </div>
                          <div className="component wishlist">
                            <div className="yith-wcwl-add-to-wishlist add-to-wishlist-4461">
                              <div
                                className="yith-wcwl-add-button show"
                                style={{ display: "block" }}
                              >
                                <a
                                  href="/product-category/phones/?add_to_wishlist=4461"
                                  data-product-id={4461}
                                  data-product-type="auction"
                                  className="add_to_wishlist single_add_to_wishlist button "
                                  data-tooltip="Add to Wishlist"
                                >
                                  <i className="far fa-heart" />
                                </a>
                                <img
                                  src="https://ibid.modeltheme.com/wp-admin/images/wpspin_light.gif"
                                  className="ajax-loading"
                                  alt="loading"
                                  width={16}
                                  height={16}
                                  style={{ visibility: "hidden" }}
                                />
                              </div>
                              <div
                                className="yith-wcwl-wishlistaddedbrowse hide"
                                style={{ display: "none" }}
                              >
                                <a
                                  href="https://ibid.modeltheme.com/wishlist/"
                                  data-toggle="tooltip"
                                  data-tooltip="Add to Wishlist Wishlist"
                                  data-placement="top"
                                  title="Browse Wishlist"
                                >
                                  <i className="fas fa-heart" />{" "}
                                </a>
                              </div>
                              <div
                                className="yith-wcwl-wishlistexistsbrowse hide"
                                style={{ display: "none" }}
                              >
                                <a
                                  href="https://ibid.modeltheme.com/wishlist/"
                                  data-tooltip="Check Wishlist"
                                  className="button"
                                >
                                  <i className="fas fa-heart" />{" "}
                                </a>
                              </div>
                              <div style={{ clear: "both" }} />
                              <div className="yith-wcwl-wishlistaddresponse" />
                            </div>
                          </div>
                          <div className="component quick-view">
                            <a
                               href="/#"
                              className="button yith-wcqv-button"
                              data-tooltip="Quickview"
                              data-product_id={4461}
                            >
                              <i className="fas fa-search" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bottom-components-list">
                      <div className="component add-to-cart">
                        <a
                          href="https://ibid.modeltheme.com/product/laptop-inspiron-core-i7/"
                          data-quantity={1}
                          data-tooltip="View Auction"
                          className="button product_type_auction"
                          data-product_id={4461}
                          data-product_sku="BF012"
                          aria-label="Read more about “Laptop Inspiron Core i7”"
                          rel="nofollow"
                        >
                          <i className="fa fa-eye" />
                        </a>
                      </div>
                      <div className="component wishlist">
                        <div className="yith-wcwl-add-to-wishlist add-to-wishlist-4461">
                          <div
                            className="yith-wcwl-add-button show"
                            style={{ display: "block" }}
                          >
                            <a
                              href="/product-category/phones/?add_to_wishlist=4461"
                              data-product-id={4461}
                              data-product-type="auction"
                              className="add_to_wishlist single_add_to_wishlist button "
                              data-tooltip="Add to Wishlist"
                            >
                              <i className="far fa-heart" />
                            </a>
                            <img
                              src="https://ibid.modeltheme.com/wp-admin/images/wpspin_light.gif"
                              className="ajax-loading"
                              alt="loading"
                              width={16}
                              height={16}
                              style={{ visibility: "hidden" }}
                            />
                          </div>
                          <div
                            className="yith-wcwl-wishlistaddedbrowse hide"
                            style={{ display: "none" }}
                          >
                            <a
                              href="https://ibid.modeltheme.com/wishlist/"
                              data-toggle="tooltip"
                              data-tooltip="Add to Wishlist Wishlist"
                              data-placement="top"
                              title="Browse Wishlist"
                            >
                              <i className="fas fa-heart" />{" "}
                            </a>
                          </div>
                          <div
                            className="yith-wcwl-wishlistexistsbrowse hide"
                            style={{ display: "none" }}
                          >
                            <a
                              href="https://ibid.modeltheme.com/wishlist/"
                              data-tooltip="Check Wishlist"
                              className="button"
                            >
                              <i className="fas fa-heart" />{" "}
                            </a>
                          </div>
                          <div style={{ clear: "both" }} />
                          <div className="yith-wcwl-wishlistaddresponse" />
                        </div>
                      </div>
                      <div className="component quick-view">
                        <a
                           href="/#"
                          className="button yith-wcqv-button"
                          data-tooltip="Quickview"
                          data-product_id={4461}
                        >
                          <i className="fas fa-search" />
                        </a>
                      </div>
                    </div>{" "}
                  </div>
                </div>
              </li>
              <li className=" post-4458 product type-product status-publish has-post-thumbnail product_cat-laptops product_cat-selfie-stickers product_tag-black-friday product_tag-sales last instock featured sold-individually shipping-taxable product-type-auction">
                <div className="products-wrapper">
                  <div className="thumbnail-and-details">
                    <div className="overlay-container">
                      <div className="thumbnail-overlay" />
                      <div className="overlay-components">
                        <div className="component add-to-cart">
                          <a
                            href="https://ibid.modeltheme.com/product/laptop-latitude-d3300/"
                            data-quantity={1}
                            data-tooltip="View Auction"
                            className="button product_type_auction"
                            data-product_id={4458}
                            data-product_sku="BF013"
                            aria-label="Read more about “Laptop Latitude d3300”"
                            rel="nofollow"
                          >
                            <i className="fa fa-eye" />
                          </a>
                        </div>
                        <div className="component wishlist hide-on-mobile">
                          <div className="yith-wcwl-add-to-wishlist add-to-wishlist-4458">
                            <div
                              className="yith-wcwl-add-button show"
                              style={{ display: "block" }}
                            >
                              <a
                                href="/product-category/phones/?add_to_wishlist=4458"
                                data-product-id={4458}
                                data-product-type="auction"
                                className="add_to_wishlist single_add_to_wishlist button "
                                data-tooltip="Add to Wishlist"
                              >
                                <i className="far fa-heart" />
                              </a>
                              <img
                                src="https://ibid.modeltheme.com/wp-admin/images/wpspin_light.gif"
                                className="ajax-loading"
                                alt="loading"
                                width={16}
                                height={16}
                                style={{ visibility: "hidden" }}
                              />
                            </div>
                            <div
                              className="yith-wcwl-wishlistaddedbrowse hide"
                              style={{ display: "none" }}
                            >
                              <a
                                href="https://ibid.modeltheme.com/wishlist/"
                                data-toggle="tooltip"
                                data-tooltip="Add to Wishlist Wishlist"
                                data-placement="top"
                                title="Browse Wishlist"
                              >
                                <i className="fas fa-heart" />{" "}
                              </a>
                            </div>
                            <div
                              className="yith-wcwl-wishlistexistsbrowse hide"
                              style={{ display: "none" }}
                            >
                              <a
                                href="https://ibid.modeltheme.com/wishlist/"
                                data-tooltip="Check Wishlist"
                                className="button"
                              >
                                <i className="fas fa-heart" />{" "}
                              </a>
                            </div>
                            <div style={{ clear: "both" }} />
                            <div className="yith-wcwl-wishlistaddresponse" />
                          </div>
                        </div>
                        <div className="component quick-view hide-on-mobile">
                          <a
                             href="/#"
                            className="button yith-wcqv-button"
                            data-tooltip="Quickview"
                            data-product_id={4458}
                          >
                            <i className="fas fa-search" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <a
                      className="woo_catalog_media_images"
                      title="Laptop Latitude d3300"
                      href="https://ibid.modeltheme.com/product/laptop-latitude-d3300/"
                    >
                      <img
                        width={300}
                        height={300}
                        src="https://ibid.modeltheme.com/wp-content/uploads/2018/09/asus-laptop-1-300x300.jpg"
                        className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                        alt=""
                        loading="lazy"
                        srcSet="https://ibid.modeltheme.com/wp-content/uploads/2018/09/asus-laptop-1-300x300.jpg 300w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/asus-laptop-1-350x350.jpg 350w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/asus-laptop-1-110x110.jpg 110w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/asus-laptop-1-400x400.jpg 400w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/asus-laptop-1.jpg 600w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/asus-laptop-1-70x70.jpg 70w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/asus-laptop-1-200x200.jpg 200w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/asus-laptop-1-150x150.jpg 150w"
                        sizes="(max-width: 300px) 100vw, 300px"
                      />
                      <img
                        className="woo_secondary_media_image"
                        src="https://ibid.modeltheme.com/wp-content/uploads/2018/09/electronic-cat4-400x400.jpg"
                        alt="Laptop Latitude d3300"
                      />
                    </a>
                  </div>
                  <span className="auction-bage" />
                  <div className="woocommerce-title-metas" style={{}}>
                    <h3 className="archive-product-title">
                      <a href="https://ibid.modeltheme.com/product/laptop-latitude-d3300/">
                        Laptop Latitude d3300{" "}
                      </a>
                    </h3>
                    <div className="details-container">
                      <div className="details-price-container details-item">
                        <div className="woocommerce-product-details__short-description">
                          <p>
                            Product galati a reality sandwich before you walk
                            back in that boardroom fire up your browser, so come
                            up with something buzzworthy, for it’s about
                            managing expectations yet baseline into the weeds.
                          </p>
                        </div>
                        Auction Ended
                        <div className="details-review-container details-item" />
                        <div className="bottom-components">
                          <div className="component add-to-cart">
                            <a
                              href="https://ibid.modeltheme.com/product/laptop-latitude-d3300/"
                              data-quantity={1}
                              data-tooltip="View Auction"
                              className="button product_type_auction"
                              data-product_id={4458}
                              data-product_sku="BF013"
                              aria-label="Read more about “Laptop Latitude d3300”"
                              rel="nofollow"
                            >
                              <i className="fa fa-eye" />
                            </a>
                          </div>
                          <div className="component wishlist">
                            <div className="yith-wcwl-add-to-wishlist add-to-wishlist-4458">
                              <div
                                className="yith-wcwl-add-button show"
                                style={{ display: "block" }}
                              >
                                <a
                                  href="/product-category/phones/?add_to_wishlist=4458"
                                  data-product-id={4458}
                                  data-product-type="auction"
                                  className="add_to_wishlist single_add_to_wishlist button "
                                  data-tooltip="Add to Wishlist"
                                >
                                  <i className="far fa-heart" />
                                </a>
                                <img
                                  src="https://ibid.modeltheme.com/wp-admin/images/wpspin_light.gif"
                                  className="ajax-loading"
                                  alt="loading"
                                  width={16}
                                  height={16}
                                  style={{ visibility: "hidden" }}
                                />
                              </div>
                              <div
                                className="yith-wcwl-wishlistaddedbrowse hide"
                                style={{ display: "none" }}
                              >
                                <a
                                  href="https://ibid.modeltheme.com/wishlist/"
                                  data-toggle="tooltip"
                                  data-tooltip="Add to Wishlist Wishlist"
                                  data-placement="top"
                                  title="Browse Wishlist"
                                >
                                  <i className="fas fa-heart" />{" "}
                                </a>
                              </div>
                              <div
                                className="yith-wcwl-wishlistexistsbrowse hide"
                                style={{ display: "none" }}
                              >
                                <a
                                  href="https://ibid.modeltheme.com/wishlist/"
                                  data-tooltip="Check Wishlist"
                                  className="button"
                                >
                                  <i className="fas fa-heart" />{" "}
                                </a>
                              </div>
                              <div style={{ clear: "both" }} />
                              <div className="yith-wcwl-wishlistaddresponse" />
                            </div>
                          </div>
                          <div className="component quick-view">
                            <a
                               href="/#"
                              className="button yith-wcqv-button"
                              data-tooltip="Quickview"
                              data-product_id={4458}
                            >
                              <i className="fas fa-search" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bottom-components-list">
                      <div className="component add-to-cart">
                        <a
                          href="https://ibid.modeltheme.com/product/laptop-latitude-d3300/"
                          data-quantity={1}
                          data-tooltip="View Auction"
                          className="button product_type_auction"
                          data-product_id={4458}
                          data-product_sku="BF013"
                          aria-label="Read more about “Laptop Latitude d3300”"
                          rel="nofollow"
                        >
                          <i className="fa fa-eye" />
                        </a>
                      </div>
                      <div className="component wishlist">
                        <div className="yith-wcwl-add-to-wishlist add-to-wishlist-4458">
                          <div
                            className="yith-wcwl-add-button show"
                            style={{ display: "block" }}
                          >
                            <a
                              href="/product-category/phones/?add_to_wishlist=4458"
                              data-product-id={4458}
                              data-product-type="auction"
                              className="add_to_wishlist single_add_to_wishlist button "
                              data-tooltip="Add to Wishlist"
                            >
                              <i className="far fa-heart" />
                            </a>
                            <img
                              src="https://ibid.modeltheme.com/wp-admin/images/wpspin_light.gif"
                              className="ajax-loading"
                              alt="loading"
                              width={16}
                              height={16}
                              style={{ visibility: "hidden" }}
                            />
                          </div>
                          <div
                            className="yith-wcwl-wishlistaddedbrowse hide"
                            style={{ display: "none" }}
                          >
                            <a
                              href="https://ibid.modeltheme.com/wishlist/"
                              data-toggle="tooltip"
                              data-tooltip="Add to Wishlist Wishlist"
                              data-placement="top"
                              title="Browse Wishlist"
                            >
                              <i className="fas fa-heart" />{" "}
                            </a>
                          </div>
                          <div
                            className="yith-wcwl-wishlistexistsbrowse hide"
                            style={{ display: "none" }}
                          >
                            <a
                              href="https://ibid.modeltheme.com/wishlist/"
                              data-tooltip="Check Wishlist"
                              className="button"
                            >
                              <i className="fas fa-heart" />{" "}
                            </a>
                          </div>
                          <div style={{ clear: "both" }} />
                          <div className="yith-wcwl-wishlistaddresponse" />
                        </div>
                      </div>
                      <div className="component quick-view">
                        <a
                           href="/#"
                          className="button yith-wcqv-button"
                          data-tooltip="Quickview"
                          data-product_id={4458}
                        >
                          <i className="fas fa-search" />
                        </a>
                      </div>
                    </div>{" "}
                  </div>
                </div>
              </li>
              <li className="clearfix hide-on-mobile" />
              <li className=" first post-4466 product type-product status-publish has-post-thumbnail product_cat-protection-phones product_cat-home-appliances product_cat-refrigerators product_tag-black-friday product_tag-sales instock sold-individually shipping-taxable purchasable product-type-auction">
                <div className="products-wrapper">
                  <div className="thumbnail-and-details">
                    <div className="overlay-container">
                      <div className="thumbnail-overlay" />
                      <div className="overlay-components">
                        <div className="component add-to-cart">
                          <a
                            href="https://ibid.modeltheme.com/product/phablet-surface-go/"
                            data-quantity={1}
                            data-tooltip="Bid Now"
                            className="button product_type_auction add_to_cart_button"
                            data-product_id={4466}
                            data-product_sku=""
                            aria-label="Read more about “Phablet Surface Go”"
                            rel="nofollow"
                          >
                            <i className="fa fa-gavel" />
                          </a>
                        </div>
                        <div className="component wishlist hide-on-mobile">
                          <div className="yith-wcwl-add-to-wishlist add-to-wishlist-4466">
                            <div
                              className="yith-wcwl-add-button show"
                              style={{ display: "block" }}
                            >
                              <a
                                href="/product-category/phones/?add_to_wishlist=4466"
                                data-product-id={4466}
                                data-product-type="auction"
                                className="add_to_wishlist single_add_to_wishlist button "
                                data-tooltip="Add to Wishlist"
                              >
                                <i className="far fa-heart" />
                              </a>
                              <img
                                src="https://ibid.modeltheme.com/wp-admin/images/wpspin_light.gif"
                                className="ajax-loading"
                                alt="loading"
                                width={16}
                                height={16}
                                style={{ visibility: "hidden" }}
                              />
                            </div>
                            <div
                              className="yith-wcwl-wishlistaddedbrowse hide"
                              style={{ display: "none" }}
                            >
                              <a
                                href="https://ibid.modeltheme.com/wishlist/"
                                data-toggle="tooltip"
                                data-tooltip="Add to Wishlist Wishlist"
                                data-placement="top"
                                title="Browse Wishlist"
                              >
                                <i className="fas fa-heart" />{" "}
                              </a>
                            </div>
                            <div
                              className="yith-wcwl-wishlistexistsbrowse hide"
                              style={{ display: "none" }}
                            >
                              <a
                                href="https://ibid.modeltheme.com/wishlist/"
                                data-tooltip="Check Wishlist"
                                className="button"
                              >
                                <i className="fas fa-heart" />{" "}
                              </a>
                            </div>
                            <div style={{ clear: "both" }} />
                            <div className="yith-wcwl-wishlistaddresponse" />
                          </div>
                        </div>
                        <div className="component quick-view hide-on-mobile">
                          <a
                             href="/#"
                            className="button yith-wcqv-button"
                            data-tooltip="Quickview"
                            data-product_id={4466}
                          >
                            <i className="fas fa-search" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <a
                      className="woo_catalog_media_images"
                      title="Phablet Surface Go"
                      href="https://ibid.modeltheme.com/product/phablet-surface-go/"
                    >
                      <img
                        width={300}
                        height={300}
                        src="https://ibid.modeltheme.com/wp-content/uploads/2018/09/microsoft-tablet-1-300x300.jpg"
                        className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                        alt=""
                        loading="lazy"
                        srcSet="https://ibid.modeltheme.com/wp-content/uploads/2018/09/microsoft-tablet-1-300x300.jpg 300w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/microsoft-tablet-1-350x350.jpg 350w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/microsoft-tablet-1-110x110.jpg 110w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/microsoft-tablet-1-400x400.jpg 400w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/microsoft-tablet-1.jpg 600w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/microsoft-tablet-1-70x70.jpg 70w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/microsoft-tablet-1-200x200.jpg 200w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/microsoft-tablet-1-150x150.jpg 150w"
                        sizes="(max-width: 300px) 100vw, 300px"
                      />
                      <img
                        className="woo_secondary_media_image"
                        src="https://ibid.modeltheme.com/wp-content/uploads/2018/10/electronic-cat1-400x400.jpg"
                        alt="Phablet Surface Go"
                      />
                      <div
                        className="countdownv2_holder "
                        data-insert-date-start=""
                        data-insert-date="2022-12-10 00:00:00"
                        data-unique-id="countdown_6366a2b545277"
                        data-countdown-direction="false"
                        data-date-format-redux="DHMS"
                        data-gmt-offset={0}
                      >
                        <div className="countdownv2_inner_holder">
                          <p className="no-margin ibid-countdown-pre-text">
                            Time left:
                          </p>
                          <div
                            className="countdownv2 clock is-countdown"
                            id="countdown_6366a2b545277"
                          >
                            <span className="countdown-row countdown-show4">
                              <span className="countdown-section">
                                <span className="countdown-amount">27</span>
                                <span className="countdown-period">Days</span>
                              </span>
                              <span className="countdown-section">
                                <span className="countdown-amount">10</span>
                                <span className="countdown-period">Hours</span>
                              </span>
                              <span className="countdown-section">
                                <span className="countdown-amount">3</span>
                                <span className="countdown-period">
                                  Minutes
                                </span>
                              </span>
                              <span className="countdown-section">
                                <span className="countdown-amount">38</span>
                                <span className="countdown-period">
                                  Seconds
                                </span>
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <span className="auction-bage" />
                  <div className="woocommerce-title-metas" style={{}}>
                    <h3 className="archive-product-title">
                      <a href="https://ibid.modeltheme.com/product/phablet-surface-go/">
                        Phablet Surface Go{" "}
                      </a>
                    </h3>
                    <div className="details-container">
                      <div className="details-price-container details-item">
                        <div className="woocommerce-product-details__short-description">
                          <p>
                            Product galati a reality sandwich before you walk
                            back in that boardroom fire up your browser, so come
                            up with something buzzworthy, for it’s about
                            managing expectations yet baseline into the weeds.
                          </p>
                        </div>
                        <span className="price">
                          Current Bid:{" "}
                          <span className="woocommerce-Price-amount amount">
                            <bdi>
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              105.00
                            </bdi>
                          </span>
                        </span>
                        <div className="details-review-container details-item" />
                        <div className="bottom-components">
                          <div className="component add-to-cart">
                            <a
                              href="https://ibid.modeltheme.com/product/phablet-surface-go/"
                              data-quantity={1}
                              data-tooltip="Bid Now"
                              className="button product_type_auction add_to_cart_button"
                              data-product_id={4466}
                              data-product_sku=""
                              aria-label="Read more about “Phablet Surface Go”"
                              rel="nofollow"
                            >
                              <i className="fa fa-gavel" />
                            </a>
                          </div>
                          <div className="component wishlist">
                            <div className="yith-wcwl-add-to-wishlist add-to-wishlist-4466">
                              <div
                                className="yith-wcwl-add-button show"
                                style={{ display: "block" }}
                              >
                                <a
                                  href="/product-category/phones/?add_to_wishlist=4466"
                                  data-product-id={4466}
                                  data-product-type="auction"
                                  className="add_to_wishlist single_add_to_wishlist button "
                                  data-tooltip="Add to Wishlist"
                                >
                                  <i className="far fa-heart" />
                                </a>
                                <img
                                  src="https://ibid.modeltheme.com/wp-admin/images/wpspin_light.gif"
                                  className="ajax-loading"
                                  alt="loading"
                                  width={16}
                                  height={16}
                                  style={{ visibility: "hidden" }}
                                />
                              </div>
                              <div
                                className="yith-wcwl-wishlistaddedbrowse hide"
                                style={{ display: "none" }}
                              >
                                <a
                                  href="https://ibid.modeltheme.com/wishlist/"
                                  data-toggle="tooltip"
                                  data-tooltip="Add to Wishlist Wishlist"
                                  data-placement="top"
                                  title="Browse Wishlist"
                                >
                                  <i className="fas fa-heart" />{" "}
                                </a>
                              </div>
                              <div
                                className="yith-wcwl-wishlistexistsbrowse hide"
                                style={{ display: "none" }}
                              >
                                <a
                                  href="https://ibid.modeltheme.com/wishlist/"
                                  data-tooltip="Check Wishlist"
                                  className="button"
                                >
                                  <i className="fas fa-heart" />{" "}
                                </a>
                              </div>
                              <div style={{ clear: "both" }} />
                              <div className="yith-wcwl-wishlistaddresponse" />
                            </div>
                          </div>
                          <div className="component quick-view">
                            <a
                               href="/#"
                              className="button yith-wcqv-button"
                              data-tooltip="Quickview"
                              data-product_id={4466}
                            >
                              <i className="fas fa-search" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bottom-components-list">
                      <div className="component add-to-cart">
                        <a
                          href="https://ibid.modeltheme.com/product/phablet-surface-go/"
                          data-quantity={1}
                          data-tooltip="Bid Now"
                          className="button product_type_auction add_to_cart_button"
                          data-product_id={4466}
                          data-product_sku=""
                          aria-label="Read more about “Phablet Surface Go”"
                          rel="nofollow"
                        >
                          <i className="fa fa-gavel" />
                        </a>
                      </div>
                      <div className="component wishlist">
                        <div className="yith-wcwl-add-to-wishlist add-to-wishlist-4466">
                          <div
                            className="yith-wcwl-add-button show"
                            style={{ display: "block" }}
                          >
                            <a
                              href="/product-category/phones/?add_to_wishlist=4466"
                              data-product-id={4466}
                              data-product-type="auction"
                              className="add_to_wishlist single_add_to_wishlist button "
                              data-tooltip="Add to Wishlist"
                            >
                              <i className="far fa-heart" />
                            </a>
                            <img
                              src="https://ibid.modeltheme.com/wp-admin/images/wpspin_light.gif"
                              className="ajax-loading"
                              alt="loading"
                              width={16}
                              height={16}
                              style={{ visibility: "hidden" }}
                            />
                          </div>
                          <div
                            className="yith-wcwl-wishlistaddedbrowse hide"
                            style={{ display: "none" }}
                          >
                            <a
                              href="https://ibid.modeltheme.com/wishlist/"
                              data-toggle="tooltip"
                              data-tooltip="Add to Wishlist Wishlist"
                              data-placement="top"
                              title="Browse Wishlist"
                            >
                              <i className="fas fa-heart" />{" "}
                            </a>
                          </div>
                          <div
                            className="yith-wcwl-wishlistexistsbrowse hide"
                            style={{ display: "none" }}
                          >
                            <a
                              href="https://ibid.modeltheme.com/wishlist/"
                              data-tooltip="Check Wishlist"
                              className="button"
                            >
                              <i className="fas fa-heart" />{" "}
                            </a>
                          </div>
                          <div style={{ clear: "both" }} />
                          <div className="yith-wcwl-wishlistaddresponse" />
                        </div>
                      </div>
                      <div className="component quick-view">
                        <a
                           href="/#"
                          className="button yith-wcqv-button"
                          data-tooltip="Quickview"
                          data-product_id={4466}
                        >
                          <i className="fas fa-search" />
                        </a>
                      </div>
                    </div>{" "}
                  </div>
                </div>
              </li>
              <li className=" last post-5468 product type-product status-publish has-post-thumbnail product_cat-phones product_tag-black-friday product_tag-sales first instock sold-individually shipping-taxable purchasable product-type-auction">
                <div className="products-wrapper">
                  <div className="thumbnail-and-details">
                    <div className="overlay-container">
                      <div className="thumbnail-overlay" />
                      <div className="overlay-components">
                        <div className="component add-to-cart">
                          <a
                            href="https://ibid.modeltheme.com/product/product-back-to-order/"
                            data-quantity={1}
                            data-tooltip="Bid Now"
                            className="button product_type_auction add_to_cart_button"
                            data-product_id={5468}
                            data-product_sku="BF002-1-1"
                            aria-label="Read more about “Product Back to Order”"
                            rel="nofollow"
                          >
                            <i className="fa fa-gavel" />
                          </a>
                        </div>
                        <div className="component wishlist hide-on-mobile">
                          <div className="yith-wcwl-add-to-wishlist add-to-wishlist-5468">
                            <div
                              className="yith-wcwl-add-button show"
                              style={{ display: "block" }}
                            >
                              <a
                                href="/product-category/phones/?add_to_wishlist=5468"
                                data-product-id={5468}
                                data-product-type="auction"
                                className="add_to_wishlist single_add_to_wishlist button "
                                data-tooltip="Add to Wishlist"
                              >
                                <i className="far fa-heart" />
                              </a>
                              <img
                                src="https://ibid.modeltheme.com/wp-admin/images/wpspin_light.gif"
                                className="ajax-loading"
                                alt="loading"
                                width={16}
                                height={16}
                                style={{ visibility: "hidden" }}
                              />
                            </div>
                            <div
                              className="yith-wcwl-wishlistaddedbrowse hide"
                              style={{ display: "none" }}
                            >
                              <a
                                href="https://ibid.modeltheme.com/wishlist/"
                                data-toggle="tooltip"
                                data-tooltip="Add to Wishlist Wishlist"
                                data-placement="top"
                                title="Browse Wishlist"
                              >
                                <i className="fas fa-heart" />{" "}
                              </a>
                            </div>
                            <div
                              className="yith-wcwl-wishlistexistsbrowse hide"
                              style={{ display: "none" }}
                            >
                              <a
                                href="https://ibid.modeltheme.com/wishlist/"
                                data-tooltip="Check Wishlist"
                                className="button"
                              >
                                <i className="fas fa-heart" />{" "}
                              </a>
                            </div>
                            <div style={{ clear: "both" }} />
                            <div className="yith-wcwl-wishlistaddresponse" />
                          </div>
                        </div>
                        <div className="component quick-view hide-on-mobile">
                          <a
                             href="/#"
                            className="button yith-wcqv-button"
                            data-tooltip="Quickview"
                            data-product_id={5468}
                          >
                            <i className="fas fa-search" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <a
                      className="woo_catalog_media_images"
                      title="Product Back to Order"
                      href="https://ibid.modeltheme.com/product/product-back-to-order/"
                    >
                      <img
                        width={300}
                        height={300}
                        src="https://ibid.modeltheme.com/wp-content/uploads/2018/09/phone-cat1-300x300.jpg"
                        className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                        alt=""
                        loading="lazy"
                        srcSet="https://ibid.modeltheme.com/wp-content/uploads/2018/09/phone-cat1-300x300.jpg 300w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/phone-cat1-200x200.jpg 200w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/phone-cat1-600x600.jpg 600w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/phone-cat1-150x150.jpg 150w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/phone-cat1-768x768.jpg 768w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/phone-cat1-1024x1024.jpg 1024w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/phone-cat1-350x350.jpg 350w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/phone-cat1-110x110.jpg 110w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/phone-cat1-400x400.jpg 400w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/phone-cat1-70x70.jpg 70w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/phone-cat1.jpg 1080w"
                        sizes="(max-width: 300px) 100vw, 300px"
                      />
                      <img
                        className="woo_secondary_media_image"
                        src="https://ibid.modeltheme.com/wp-content/uploads/2018/10/electronic-cat1-400x400.jpg"
                        alt="Product Back to Order"
                      />
                      <div
                        className="countdownv2_holder "
                        data-insert-date-start=""
                        data-insert-date="2022-12-19 00:00:00"
                        data-unique-id="countdown_6366a2b5468bc"
                        data-countdown-direction="false"
                        data-date-format-redux="DHMS"
                        data-gmt-offset={0}
                      >
                        <div className="countdownv2_inner_holder">
                          <p className="no-margin ibid-countdown-pre-text">
                            Time left:
                          </p>
                          <div
                            className="countdownv2 clock is-countdown"
                            id="countdown_6366a2b5468bc"
                          >
                            <span className="countdown-row countdown-show4">
                              <span className="countdown-section">
                                <span className="countdown-amount">36</span>
                                <span className="countdown-period">Days</span>
                              </span>
                              <span className="countdown-section">
                                <span className="countdown-amount">10</span>
                                <span className="countdown-period">Hours</span>
                              </span>
                              <span className="countdown-section">
                                <span className="countdown-amount">3</span>
                                <span className="countdown-period">
                                  Minutes
                                </span>
                              </span>
                              <span className="countdown-section">
                                <span className="countdown-amount">38</span>
                                <span className="countdown-period">
                                  Seconds
                                </span>
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <span className="auction-bage" />
                  <div className="woocommerce-title-metas" style={{}}>
                    <h3 className="archive-product-title">
                      <a href="https://ibid.modeltheme.com/product/product-back-to-order/">
                        Product Back to Order{" "}
                      </a>
                    </h3>
                    <div className="details-container">
                      <div className="details-price-container details-item">
                        <div className="woocommerce-product-details__short-description">
                          <p>
                            The Ragdoll is a cat breed with blue eyes and a
                            distinct colorpoint coat. It is a large and muscular
                            semi-longhair cat with a soft and silky coat. Like
                            all long haired cats, Ragdolls need grooming to
                            ensure their fur does not mat.
                          </p>
                        </div>
                        <span className="price">
                          Starting Bid:{" "}
                          <span className="woocommerce-Price-amount amount">
                            <bdi>
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              19.00
                            </bdi>
                          </span>
                        </span>
                        <div className="details-review-container details-item" />
                        <div className="bottom-components">
                          <div className="component add-to-cart">
                            <a
                              href="https://ibid.modeltheme.com/product/product-back-to-order/"
                              data-quantity={1}
                              data-tooltip="Bid Now"
                              className="button product_type_auction add_to_cart_button"
                              data-product_id={5468}
                              data-product_sku="BF002-1-1"
                              aria-label="Read more about “Product Back to Order”"
                              rel="nofollow"
                            >
                              <i className="fa fa-gavel" />
                            </a>
                          </div>
                          <div className="component wishlist">
                            <div className="yith-wcwl-add-to-wishlist add-to-wishlist-5468">
                              <div
                                className="yith-wcwl-add-button show"
                                style={{ display: "block" }}
                              >
                                <a
                                  href="/product-category/phones/?add_to_wishlist=5468"
                                  data-product-id={5468}
                                  data-product-type="auction"
                                  className="add_to_wishlist single_add_to_wishlist button "
                                  data-tooltip="Add to Wishlist"
                                >
                                  <i className="far fa-heart" />
                                </a>
                                <img
                                  src="https://ibid.modeltheme.com/wp-admin/images/wpspin_light.gif"
                                  className="ajax-loading"
                                  alt="loading"
                                  width={16}
                                  height={16}
                                  style={{ visibility: "hidden" }}
                                />
                              </div>
                              <div
                                className="yith-wcwl-wishlistaddedbrowse hide"
                                style={{ display: "none" }}
                              >
                                <a
                                  href="https://ibid.modeltheme.com/wishlist/"
                                  data-toggle="tooltip"
                                  data-tooltip="Add to Wishlist Wishlist"
                                  data-placement="top"
                                  title="Browse Wishlist"
                                >
                                  <i className="fas fa-heart" />{" "}
                                </a>
                              </div>
                              <div
                                className="yith-wcwl-wishlistexistsbrowse hide"
                                style={{ display: "none" }}
                              >
                                <a
                                  href="https://ibid.modeltheme.com/wishlist/"
                                  data-tooltip="Check Wishlist"
                                  className="button"
                                >
                                  <i className="fas fa-heart" />{" "}
                                </a>
                              </div>
                              <div style={{ clear: "both" }} />
                              <div className="yith-wcwl-wishlistaddresponse" />
                            </div>
                          </div>
                          <div className="component quick-view">
                            <a
                               href="/#"
                              className="button yith-wcqv-button"
                              data-tooltip="Quickview"
                              data-product_id={5468}
                            >
                              <i className="fas fa-search" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bottom-components-list">
                      <div className="component add-to-cart">
                        <a
                          href="https://ibid.modeltheme.com/product/product-back-to-order/"
                          data-quantity={1}
                          data-tooltip="Bid Now"
                          className="button product_type_auction add_to_cart_button"
                          data-product_id={5468}
                          data-product_sku="BF002-1-1"
                          aria-label="Read more about “Product Back to Order”"
                          rel="nofollow"
                        >
                          <i className="fa fa-gavel" />
                        </a>
                      </div>
                      <div className="component wishlist">
                        <div className="yith-wcwl-add-to-wishlist add-to-wishlist-5468">
                          <div
                            className="yith-wcwl-add-button show"
                            style={{ display: "block" }}
                          >
                            <a
                              href="/product-category/phones/?add_to_wishlist=5468"
                              data-product-id={5468}
                              data-product-type="auction"
                              className="add_to_wishlist single_add_to_wishlist button "
                              data-tooltip="Add to Wishlist"
                            >
                              <i className="far fa-heart" />
                            </a>
                            <img
                              src="https://ibid.modeltheme.com/wp-admin/images/wpspin_light.gif"
                              className="ajax-loading"
                              alt="loading"
                              width={16}
                              height={16}
                              style={{ visibility: "hidden" }}
                            />
                          </div>
                          <div
                            className="yith-wcwl-wishlistaddedbrowse hide"
                            style={{ display: "none" }}
                          >
                            <a
                              href="https://ibid.modeltheme.com/wishlist/"
                              data-toggle="tooltip"
                              data-tooltip="Add to Wishlist Wishlist"
                              data-placement="top"
                              title="Browse Wishlist"
                            >
                              <i className="fas fa-heart" />{" "}
                            </a>
                          </div>
                          <div
                            className="yith-wcwl-wishlistexistsbrowse hide"
                            style={{ display: "none" }}
                          >
                            <a
                              href="https://ibid.modeltheme.com/wishlist/"
                              data-tooltip="Check Wishlist"
                              className="button"
                            >
                              <i className="fas fa-heart" />{" "}
                            </a>
                          </div>
                          <div style={{ clear: "both" }} />
                          <div className="yith-wcwl-wishlistaddresponse" />
                        </div>
                      </div>
                      <div className="component quick-view">
                        <a
                           href="/#"
                          className="button yith-wcqv-button"
                          data-tooltip="Quickview"
                          data-product_id={5468}
                        >
                          <i className="fas fa-search" />
                        </a>
                      </div>
                    </div>{" "}
                  </div>
                </div>
              </li>
              <li className=" post-5467 product type-product status-publish has-post-thumbnail product_cat-protection-phones product_cat-console-gaming product_cat-data-cables-phones product_cat-mobile-phone-chargers product_cat-mobile-phones product_cat-phones product_cat-power-bank product_cat-sales product_cat-selfie-stickers product_cat-tablets product_cat-protection-tablets product_tag-black-friday product_tag-sales last instock sold-individually shipping-taxable purchasable product-type-auction">
                <div className="products-wrapper">
                  <div className="thumbnail-and-details">
                    <div className="overlay-container">
                      <div className="thumbnail-overlay" />
                      <div className="overlay-components">
                        <div className="component add-to-cart">
                          <a
                            href="https://ibid.modeltheme.com/product/product-out-of-stock/"
                            data-quantity={1}
                            data-tooltip="Bid Now"
                            className="button product_type_auction add_to_cart_button"
                            data-product_id={5467}
                            data-product_sku="BF002-1"
                            aria-label="Read more about “Product Out of Stock”"
                            rel="nofollow"
                          >
                            <i className="fa fa-gavel" />
                          </a>
                        </div>
                        <div className="component wishlist hide-on-mobile">
                          <div className="yith-wcwl-add-to-wishlist add-to-wishlist-5467">
                            <div
                              className="yith-wcwl-add-button show"
                              style={{ display: "block" }}
                            >
                              <a
                                href="/product-category/phones/?add_to_wishlist=5467"
                                data-product-id={5467}
                                data-product-type="auction"
                                className="add_to_wishlist single_add_to_wishlist button "
                                data-tooltip="Add to Wishlist"
                              >
                                <i className="far fa-heart" />
                              </a>
                              <img
                                src="https://ibid.modeltheme.com/wp-admin/images/wpspin_light.gif"
                                className="ajax-loading"
                                alt="loading"
                                width={16}
                                height={16}
                                style={{ visibility: "hidden" }}
                              />
                            </div>
                            <div
                              className="yith-wcwl-wishlistaddedbrowse hide"
                              style={{ display: "none" }}
                            >
                              <a
                                href="https://ibid.modeltheme.com/wishlist/"
                                data-toggle="tooltip"
                                data-tooltip="Add to Wishlist Wishlist"
                                data-placement="top"
                                title="Browse Wishlist"
                              >
                                <i className="fas fa-heart" />{" "}
                              </a>
                            </div>
                            <div
                              className="yith-wcwl-wishlistexistsbrowse hide"
                              style={{ display: "none" }}
                            >
                              <a
                                href="https://ibid.modeltheme.com/wishlist/"
                                data-tooltip="Check Wishlist"
                                className="button"
                              >
                                <i className="fas fa-heart" />{" "}
                              </a>
                            </div>
                            <div style={{ clear: "both" }} />
                            <div className="yith-wcwl-wishlistaddresponse" />
                          </div>
                        </div>
                        <div className="component quick-view hide-on-mobile">
                          <a
                             href="/#"
                            className="button yith-wcqv-button"
                            data-tooltip="Quickview"
                            data-product_id={5467}
                          >
                            <i className="fas fa-search" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <a
                      className="woo_catalog_media_images"
                      title="Product Out of Stock"
                      href="https://ibid.modeltheme.com/product/product-out-of-stock/"
                    >
                      <img
                        width={300}
                        height={300}
                        src="https://ibid.modeltheme.com/wp-content/uploads/2018/09/phone-cat1-300x300.jpg"
                        className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                        alt=""
                        loading="lazy"
                        srcSet="https://ibid.modeltheme.com/wp-content/uploads/2018/09/phone-cat1-300x300.jpg 300w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/phone-cat1-200x200.jpg 200w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/phone-cat1-600x600.jpg 600w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/phone-cat1-150x150.jpg 150w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/phone-cat1-768x768.jpg 768w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/phone-cat1-1024x1024.jpg 1024w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/phone-cat1-350x350.jpg 350w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/phone-cat1-110x110.jpg 110w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/phone-cat1-400x400.jpg 400w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/phone-cat1-70x70.jpg 70w, https://ibid.modeltheme.com/wp-content/uploads/2018/09/phone-cat1.jpg 1080w"
                        sizes="(max-width: 300px) 100vw, 300px"
                      />
                      <img
                        className="woo_secondary_media_image"
                        src="https://ibid.modeltheme.com/wp-content/uploads/2018/10/electronic-cat1-400x400.jpg"
                        alt="Product Out of Stock"
                      />
                      <div
                        className="countdownv2_holder "
                        data-insert-date-start=""
                        data-insert-date="2022-12-18 00:00:00"
                        data-unique-id="countdown_6366a2b54807b"
                        data-countdown-direction="false"
                        data-date-format-redux="DHMS"
                        data-gmt-offset={0}
                      >
                        <div className="countdownv2_inner_holder">
                          <p className="no-margin ibid-countdown-pre-text">
                            Time left:
                          </p>
                          <div
                            className="countdownv2 clock is-countdown"
                            id="countdown_6366a2b54807b"
                          >
                            <span className="countdown-row countdown-show4">
                              <span className="countdown-section">
                                <span className="countdown-amount">35</span>
                                <span className="countdown-period">Days</span>
                              </span>
                              <span className="countdown-section">
                                <span className="countdown-amount">10</span>
                                <span className="countdown-period">Hours</span>
                              </span>
                              <span className="countdown-section">
                                <span className="countdown-amount">3</span>
                                <span className="countdown-period">
                                  Minutes
                                </span>
                              </span>
                              <span className="countdown-section">
                                <span className="countdown-amount">38</span>
                                <span className="countdown-period">
                                  Seconds
                                </span>
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <span className="auction-bage" />
                  <div className="woocommerce-title-metas" style={{}}>
                    <h3 className="archive-product-title">
                      <a href="https://ibid.modeltheme.com/product/product-out-of-stock/">
                        Product Out of Stock{" "}
                      </a>
                    </h3>
                    <div className="details-container">
                      <div className="details-price-container details-item">
                        <div className="woocommerce-product-details__short-description">
                          <p>
                            The Ragdoll is a cat breed with blue eyes and a
                            distinct colorpoint coat. It is a large and muscular
                            semi-longhair cat with a soft and silky coat. Like
                            all long haired cats, Ragdolls need grooming to
                            ensure their fur does not mat.
                          </p>
                        </div>
                        <span className="price">
                          Current Bid:{" "}
                          <span className="woocommerce-Price-amount amount">
                            <bdi>
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              119.00
                            </bdi>
                          </span>
                        </span>
                        <div className="details-review-container details-item" />
                        <div className="bottom-components">
                          <div className="component add-to-cart">
                            <a
                              href="https://ibid.modeltheme.com/product/product-out-of-stock/"
                              data-quantity={1}
                              data-tooltip="Bid Now"
                              className="button product_type_auction add_to_cart_button"
                              data-product_id={5467}
                              data-product_sku="BF002-1"
                              aria-label="Read more about “Product Out of Stock”"
                              rel="nofollow"
                            >
                              <i className="fa fa-gavel" />
                            </a>
                          </div>
                          <div className="component wishlist">
                            <div className="yith-wcwl-add-to-wishlist add-to-wishlist-5467">
                              <div
                                className="yith-wcwl-add-button show"
                                style={{ display: "block" }}
                              >
                                <a
                                  href="/product-category/phones/?add_to_wishlist=5467"
                                  data-product-id={5467}
                                  data-product-type="auction"
                                  className="add_to_wishlist single_add_to_wishlist button "
                                  data-tooltip="Add to Wishlist"
                                >
                                  <i className="far fa-heart" />
                                </a>
                                <img
                                  src="https://ibid.modeltheme.com/wp-admin/images/wpspin_light.gif"
                                  className="ajax-loading"
                                  alt="loading"
                                  width={16}
                                  height={16}
                                  style={{ visibility: "hidden" }}
                                />
                              </div>
                              <div
                                className="yith-wcwl-wishlistaddedbrowse hide"
                                style={{ display: "none" }}
                              >
                                <a
                                  href="https://ibid.modeltheme.com/wishlist/"
                                  data-toggle="tooltip"
                                  data-tooltip="Add to Wishlist Wishlist"
                                  data-placement="top"
                                  title="Browse Wishlist"
                                >
                                  <i className="fas fa-heart" />{" "}
                                </a>
                              </div>
                              <div
                                className="yith-wcwl-wishlistexistsbrowse hide"
                                style={{ display: "none" }}
                              >
                                <a
                                  href="https://ibid.modeltheme.com/wishlist/"
                                  data-tooltip="Check Wishlist"
                                  className="button"
                                >
                                  <i className="fas fa-heart" />{" "}
                                </a>
                              </div>
                              <div style={{ clear: "both" }} />
                              <div className="yith-wcwl-wishlistaddresponse" />
                            </div>
                          </div>
                          <div className="component quick-view">
                            <a
                               href="/#"
                              className="button yith-wcqv-button"
                              data-tooltip="Quickview"
                              data-product_id={5467}
                            >
                              <i className="fas fa-search" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bottom-components-list">
                      <div className="component add-to-cart">
                        <a
                          href="https://ibid.modeltheme.com/product/product-out-of-stock/"
                          data-quantity={1}
                          data-tooltip="Bid Now"
                          className="button product_type_auction add_to_cart_button"
                          data-product_id={5467}
                          data-product_sku="BF002-1"
                          aria-label="Read more about “Product Out of Stock”"
                          rel="nofollow"
                        >
                          <i className="fa fa-gavel" />
                        </a>
                      </div>
                      <div className="component wishlist">
                        <div className="yith-wcwl-add-to-wishlist add-to-wishlist-5467">
                          <div
                            className="yith-wcwl-add-button show"
                            style={{ display: "block" }}
                          >
                            <a
                              href="/product-category/phones/?add_to_wishlist=5467"
                              data-product-id={5467}
                              data-product-type="auction"
                              className="add_to_wishlist single_add_to_wishlist button "
                              data-tooltip="Add to Wishlist"
                            >
                              <i className="far fa-heart" />
                            </a>
                            <img
                              src="https://ibid.modeltheme.com/wp-admin/images/wpspin_light.gif"
                              className="ajax-loading"
                              alt="loading"
                              width={16}
                              height={16}
                              style={{ visibility: "hidden" }}
                            />
                          </div>
                          <div
                            className="yith-wcwl-wishlistaddedbrowse hide"
                            style={{ display: "none" }}
                          >
                            <a
                              href="https://ibid.modeltheme.com/wishlist/"
                              data-toggle="tooltip"
                              data-tooltip="Add to Wishlist Wishlist"
                              data-placement="top"
                              title="Browse Wishlist"
                            >
                              <i className="fas fa-heart" />{" "}
                            </a>
                          </div>
                          <div
                            className="yith-wcwl-wishlistexistsbrowse hide"
                            style={{ display: "none" }}
                          >
                            <a
                              href="https://ibid.modeltheme.com/wishlist/"
                              data-tooltip="Check Wishlist"
                              className="button"
                            >
                              <i className="fas fa-heart" />{" "}
                            </a>
                          </div>
                          <div style={{ clear: "both" }} />
                          <div className="yith-wcwl-wishlistaddresponse" />
                        </div>
                      </div>
                      <div className="component quick-view">
                        <a
                           href="/#"
                          className="button yith-wcqv-button"
                          data-tooltip="Quickview"
                          data-product_id={5467}
                        >
                          <i className="fas fa-search" />
                        </a>
                      </div>
                    </div>{" "}
                  </div>
                </div>
              </li>
              <li className="clearfix hide-on-mobile" />
            </ul>
            <nav className="woocommerce-pagination">
              <ul className="page-numbers">
                <li>
                  <span aria-current="page" className="page-numbers current">
                    1
                  </span>
                </li>
                <li>
                  <a
                    className="page-numbers"
                    href="https://ibid.modeltheme.com/product-category/phones/page/2/"
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    className="next page-numbers"
                    href="https://ibid.modeltheme.com/product-category/phones/page/2/"
                  >
                    →
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </WrapperContent>
  );
};
