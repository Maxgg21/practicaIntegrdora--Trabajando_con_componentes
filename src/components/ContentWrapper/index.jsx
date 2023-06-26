import { ContentRowTop } from "../ContentRowTop/index";
import { Footer } from "../Footer/index";
import { TopBar } from "../TopBar/index";
import { Table } from "../Table";

export const ContentWrapper = () => {
      return (
            <>
                  {/* <!-- Content Wrapper --> */}
                  <div id="content-wrapper" className="d-flex flex-column">
                        {/* <!-- Main Content --> */}
                        <div id="content">
                              <TopBar />
                              <ContentRowTop />
                        </div>
                        <div>
                              <Table />
                        </div>
                        {/* <!-- End of MainContent --> */}
                        <Footer />
                  </div>
                  {/* <!-- End of Content Wrapper --> */}
            </>
      );
};