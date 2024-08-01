import { Box } from "@mui/material";
import CTable from "./components/CTable";
import Filters from "./components/Filters";
import { useState } from "react";
import Filter from "../../../../data/models/Filter";

const Products = () => {
  const [filters, setFilters] = useState<Filter>({
    productId: null,
    productLineIds: [],
    statuses: []
  })

  return (
    <div className="mainContent">
      <div className="header">
        <div className="title">Danh sách sản phẩm</div>
      </div>
      <Box sx={{ border: '1px solid lightgrey', borderRadius: 2 , boxShadow: 3}}>
        <Filters filters={filters} setFilters={setFilters}/>
        <div className='table'>
          <CTable filters={filters}/>
        </div>
      </Box>
    </div>
  );
};

Products.propTypes = {};

export default Products;
