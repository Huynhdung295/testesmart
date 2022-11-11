import { IntroProduct } from "./ContentElements/IntroProduct";
import { LastAuction } from "./ContentElements/LastAuctions";
import { LastNew } from "./ContentElements/LastNew";
import { ListBranch } from "./ContentElements/ListBranch";
import { ListProduct } from "./ContentElements/ListProduct";
import { Service } from "./ContentElements/Services";

export const Content = () => {
  return (
    <div id="primary" className="no-padding content-area no-sidebar">
      <div className="container">
        <main id="main" className="col-md_12 site-main main-content">
          <article id="post-22 page type-page status-publish hentry">
            <div className="entry-content">
              <Service />
              <LastAuction />
              <div className="vc_row-full-width vc_clearfix"></div>
              <IntroProduct />
              <div className="vc_row-full-width vc_clearfix"></div>
              <ListProduct />
              <div className="vc_row-full-width vc_clearfix"></div>
              <LastNew />
              <div className="vc_row-full-width vc_clearfix"></div>
              <ListBranch />
              <div className="vc_row-full-width vc_clearfix"></div>
              <div className="clearfix"></div>
            </div>
          </article>
        </main>
      </div>
    </div>
  );
};
