import styled from "styled-components";
import DetailPicture from "../../components/DetailPicture";
import DetailPurchase from "../../components/DetailPurchase";


const ProductDetailPage = () => {
  return (
    <DeTailWrap>
      <div className="deTailPageContents">
        <div className="deTailPageFlex">
          <DetailPicture />
          <DetailPurchase />
        </div>
      </div>
    </DeTailWrap>
  );
};

export default ProductDetailPage;

const DeTailWrap = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 100px 0 0 0;

  .deTailPageFlex {
    display: flex;
    justify-content: space-between;
  }
`;
