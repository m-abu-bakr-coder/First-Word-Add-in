/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { makeStyles, Button, Input, Textarea } from '@fluentui/react-components';
import { Card, Dropdown, Option } from '@fluentui/react-components';

const useStyles = makeStyles({
    mainDiv: {
        padding: "5px 10px",
        backgroundColor: "#c1e5f5"
      },
    headingH3: {
        margin: "12px 0px",
    },
    searchBarDiv: {
        margin: "8px 0px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        columnGap: "15px",
    },
    searchLabel: {
        fontWeight: "bold",
    },
    searchBar: {
        flex: "1",
        padding: "2px",
        outline: "none",
        minWidth: "10px",
        maxWidth: "auto",
    },
    card: {
        width: "100%",
        height: "50px",
        margin: "8px 0px",
        outline: "none",
    },
    textArea: {
        width: "100%",
        height: "80px",
        margin: "8px 0px",
        outline: "none",
    },
    insertBtnDiv: {
        display: "block",
        textAlign: "right",
    },
    dropDownDiv: {
        display: "flex",
        columnGap: "8px",
        flexWrap: "wrap",
        margin: "8px 0px",
    },
    dropDown: {
        flex: "auto",
        minWidth: "10px",
        maxWidth: "auto",
    },
});

const Pitchmark: React.FC = () => {
    const style = useStyles();
    const [addressee, setAddressee] = useState<string>("");
    const [products, setProducts] = useState<string[]>([]);
    const [portfolios, setPortfolios] = useState<string[]>([]);

    const options = [
        "option a",
        "option b",
        "option c",
    ];

    const multiSelectOne = [
        "One",
        "Two",
        "Three",
    ];

    const multiSelectTwo = [
        "One",
        "Two",
        "Three",
    ];

    const handleProductSelect = (selectedProduct: string) => {
        setProducts((prevProducts) =>
            prevProducts.includes(selectedProduct)
                ? prevProducts.filter((product) => product !== selectedProduct)
                : [...prevProducts, selectedProduct]
        );
    };


    const handlePortfolioSelect = (selectedPortfolio: string) => {
        setPortfolios((prePortfolio)=>
            prePortfolio.includes(selectedPortfolio)
            ? prePortfolio.filter((portfolio)=> portfolio !== selectedPortfolio)
            : [...prePortfolio, selectedPortfolio]
        );
    };


    return (
        <div className={style.mainDiv}>
            <div>
                <h3 className={style.headingH3}>Addressee + document type:</h3>
                <div className={style.dropDownDiv}>
                    <Dropdown
                        className={style.dropDown}
                        placeholder="Addressee"
                    >
                        {options.map((option) => (
                            <Option key={option} onClick={() => setAddressee(option)}>
                                {option}
                            </Option>
                        ))}
                    </Dropdown>
                    <Button appearance="primary">
                        Insert
                    </Button>
                </div>

                <h3 className={style.headingH3}>Select Products / Services:</h3>
                <div className={style.dropDownDiv}>
                    <Dropdown
                        className={style.dropDown}
                        multiselect={true}
                        placeholder="Products"
                    >
                        {multiSelectOne.map((multiSelectOne) => (
                            <Option
                                key={multiSelectOne}
                                onClick={() => handleProductSelect(multiSelectOne)}
                            >
                                {multiSelectOne}
                            </Option>
                        ))}
                    </Dropdown>
                    <Button appearance="primary">
                        Select
                    </Button>
                </div>

                <h3 className={style.headingH3}>Select IP Portfolio:</h3>
                <div className={style.dropDownDiv}>
                    <Dropdown
                        className={style.dropDown}
                        multiselect={true}
                        placeholder="Portfolio"
                    >
                        {multiSelectTwo.map((multiSelectTwo) => (
                            <Option 
                            key={multiSelectTwo}
                            onClick={()=>handlePortfolioSelect(multiSelectTwo)}
                            >
                                {multiSelectTwo}
                            </Option>
                        ))}
                    </Dropdown>
                    <Button appearance="primary">
                        Select
                    </Button>
                </div>

                <div className={style.searchBarDiv}>
                    <label className={style.searchLabel} htmlFor="search">Search:</label>
                    <Input className={style.searchBar} />
                </div>

                <h3 className={style.headingH3}>Select:</h3>
                <Card className={style.card}></Card>
                <Textarea className={style.textArea} />

                <div className={style.insertBtnDiv}>
                    <Button appearance="primary">
                        Next
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Pitchmark;
