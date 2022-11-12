import { WrapperContent } from "../../Elements/WrapperContent";
import { IntroProduct } from "./ContentElements/IntroProduct";
import { LastAuction } from "./ContentElements/LastAuctions";
import { LastNew } from "./ContentElements/LastNew";
import { ListBranch } from "./ContentElements/ListBranch";
import { ListProduct } from "./ContentElements/ListProduct";
import { Service } from "./ContentElements/Services";

export const Content = () => {
  return (
    <WrapperContent>
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
    </WrapperContent>
  );
};
