const classBody = {
  0: "home page-template-default page theme-ibid woocommerce-js is_category_menu first_header wpb-js-composer js-comp-ver-6.9.0 vc_responsive dokan-theme-ibid",
  1: "archive tax-product_cat term-phones theme-ibid woocommerce woocommerce-page woocommerce-js is_category_menu first_header wpb-js-composer js-comp-ver-6.9.0 vc_responsive dokan-theme-ibid",
  2: "page-template-default page page-child parent-pageid-8 theme-ibid woocommerce-js is_category_menu first_header wpb-js-composer js-comp-ver-6.9.0 vc_responsive dokan-theme-ibid",
  3: "page-template-default page theme-ibid woocommerce-js is_category_menu first_header wpb-js-composer js-comp-ver-6.9.0 vc_responsive dokan-theme-ibid",
};
export const setClassBody = (type) =>
  (window.document.body.className = classBody[type]);
