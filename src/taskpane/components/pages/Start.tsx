/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { makeStyles, Button } from '@fluentui/react-components';

import {
    Dropdown,
    Option,
  } from "@fluentui/react-components";
  
  




const useStyles = makeStyles ({
    mainDiv: {
        padding: "5px 10px",
        backgroundColor: "#c1e5f5"
      },
    nextBtnDiv: {
        columnGap: "15px",
        display: "flex",
        justifyContent: "end",
        marginTop: "5px",
      },
      pmIdBtn: {
        width: "100%",
        margin: "5px auto",
      },
      headingH3: {
        margin: "12px 0px"
      },
      dropDown: {
        display: "flex",
        gridTemplateRows: "repeat(1fr)",
        justifyItems: "start",
        gap: "2px",
        width: '100%',
        margin: "8px 0px",
      },
      dropDownMenu: {
        flex: "auto",
        minWidth: "10px",
        maxWidth: "auto",
      },
  });

const Start :React.FC = () => {
    const styles = useStyles();
    const [selectedMatter, setSelectedMatter] = useState<string>("");
    const [selectedLang, setSelectedLang] = useState<string>("");
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const [selectedClass, setSelectedClass] = useState<string>("");
    const [selectedType, setSelectedType] = useState<string>("");


    const matter = [
        "matter 1",
        "matter 2",
        "matter 3",
    ];

    const language = [
        "lang 1",
        "lang 2",
        "lang 3",
    ];

    const category = [
        "cat 1",
        "car 2",
        "car 3",
    ];

    const classNo = [
        "class 1",
        "class 2",
        "class 3",
    ];

    const type = [
        "type 1",
        "type 2",
        "type 3",
    ];


    return (
    <div className={styles.mainDiv}>
        <div>
            


            <h3 className={styles.headingH3}>Select Matter:</h3>
            <div className={styles.dropDown}>
                <Dropdown
                className={styles.dropDownMenu} 
                    placeholder="Matter"
                >
                    {matter.map((matter) => (
                    <Option onClick={()=>{setSelectedMatter(matter)}} key={matter}>
                        {matter}
                    </Option>
                    ))}
                </Dropdown>
            </div>


            <div>
                <Button className={styles.pmIdBtn} appearance="primary">
                    New Blank Document
                </Button>
            </div>


            <h3 className={styles.headingH3} >New From Templete:</h3>
            <div className={styles.dropDown}>
                <Dropdown
                className={styles.dropDownMenu}
                    placeholder="Language"
                >
                    {language.map((language) => (
                    <Option onClick={()=>{setSelectedLang(language)}} key={language}>
                        {language}
                    </Option>
                    ))}
                </Dropdown>
            </div>


            <div className={styles.dropDown}>
                <Dropdown
                className={styles.dropDownMenu}
                    placeholder="Category"
                >
                    {category.map((category) => (
                    <Option onClick={()=>{setSelectedCategory(category)}} key={category}>
                        {category}
                    </Option>
                    ))}
                </Dropdown >
            </div>


            <div className={styles.dropDown}>
                <Dropdown
                className={styles.dropDownMenu}
                    placeholder="Class"
                >
                    {classNo.map((classNo) => (
                    <Option onClick={()=>{setSelectedClass(classNo)}} key={classNo}>
                        {classNo}
                    </Option>
                    ))}
                </Dropdown>
            </div>


            <div className={styles.dropDown}>
                <Dropdown
                className={styles.dropDownMenu}
                    placeholder="Type"
                >
                    {type.map((type) => (
                    <Option onClick={()=>{setSelectedType(type)}} key={type}>
                        {type}
                    </Option>
                    ))}
                </Dropdown>
            </div>


            <h3 className={styles.headingH3}>New Pitchmark Doc:</h3>

            <div>
                <Button className={styles.pmIdBtn} appearance="primary">
                    PM ID
                </Button>
            </div>



            <div className={styles.nextBtnDiv}>
                <Button appearance="primary">
                    Next
                </Button>
            </div>
        </div>
    </div>
  )
}

export default Start;
