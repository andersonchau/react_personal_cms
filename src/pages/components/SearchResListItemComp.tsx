import React from 'react';
import { ContentResultDisplayItemUIWrapper } from '../../interfaces/AppInterface';
import Button from '@mui/material/Button';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import logo from '../../assets/text.svg';


  

const SearchResListItemComp: React.FC<ContentResultDisplayItemUIWrapper> = 
({ data,onDetailsClick }) => {
  
  const handleClick = () => {
        //alert('Button clicked!' + data.id);
        onDetailsClick(data.id);
      };

      return (  
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div
        key={data.id}
        style={{
          display: "flex",
          alignItems: "center",
          border: "1px solid #ddd",
          padding: "16px",
          borderRadius: "8px",
        }}
      >
        {/**/}
        <img
          src={logo}
          alt={data.title}
          style={{ width: "100px", height: "100px", marginRight: "16px" }}
        />

        <div>
          <h3 style={{ margin: 0, fontWeight: 700  }}>{data.title}</h3>
          <p style={{ margin: "8px 0" }}>{data.description}</p>
        </div>

        <div style={{ marginLeft: "auto" }}>
          <Button variant="contained" 
          onClick={handleClick}
          >Details</Button>
        </div>

      </div>
  </div>);
 
};
    
export default SearchResListItemComp;
    