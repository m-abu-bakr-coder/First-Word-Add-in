/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { makeStyles, Button, Input } from '@fluentui/react-components'
import React, { useState } from 'react'
import { DatePicker } from "@fluentui/react-datepicker-compat";


const useStyles = makeStyles({
  mainDiv: {
    padding: "5px 10px",
    backgroundColor: "#c1e5f5"
  },
  input: {
    flex: "1",
    minWidth: "10px",
    maxWidth: "auto",
    padding: "6px",
    borderRadius: "5px",
    outline: "none",
  },
  dropDown:{
    flex: "1",
    padding: "2px",
    outline: "none",
    minWidth: "10px",
    maxWidth: "auto",
  },

  inputBtnDiv: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    columnGap: "10px",
  },

  headingH3:{
    margin: "10px 0px",
  },

  pTitle: {
    margin: "10px 0px",
  },
})


const Variables :React.FC = () => {
  const style = useStyles();
  const [date, setDate] = useState<Date>();
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [counterpartyName, setCounterpartyName] = useState<string|null>(null);
  const [counterpartyAddress, setCounterpartyAddress] = useState<string|null>(null);
  const [currency, setCurrency] = useState<string|null>(null);



  return (
    <div className={style.mainDiv}>
      <h3 className={style.headingH3}>Examples:</h3>
      <p className={style.pTitle}>Date:</p>
      <div className={style.inputBtnDiv}>
        <DatePicker
          className={style.dropDown}
          onSelectDate={(D)=>{setDate(D)}}
          placeholder="Select a date..."
        />
        <Button appearance="primary">
          Insert
        </Button>
      </div>






      <p className={style.pTitle}>Counterparty name:</p>
      <div className={style.inputBtnDiv}>
        <Input 
        className={style.dropDown}
        value={counterpartyName} 
        onChange={(e)=>{setCounterpartyName(e.target.value)}} 
        />
        <Button appearance="primary">
          Insert
        </Button>
      </div>






      <p className={style.pTitle}>Counterparty address:</p>
      <div className={style.inputBtnDiv}>
        <Input 
        className={style.dropDown}
        value={counterpartyAddress} 
        onChange={(e)=>{setCounterpartyAddress(e.target.value)}}
         />
        <Button appearance="primary">
          Insert
        </Button>
      </div>






      <p className={style.pTitle}>Contract start date:</p>
      <div className={style.inputBtnDiv}>
      <DatePicker
          className={style.dropDown}
          onSelectDate={(startD)=>{setStartDate(startD)}}
          placeholder="Select start date..."
        />
        <Button appearance="primary">
          Insert
        </Button>
      </div>






      <p className={style.pTitle}>Contract end date:</p>
      <div className={style.inputBtnDiv}>
        <DatePicker
            className={style.dropDown}
            onSelectDate={(endD)=>{setEndDate(endD)}}
            placeholder="Select end date..."
          />
        <Button appearance="primary">
          Insert
        </Button>
      </div>






      <p className={style.pTitle}>Currency:</p>
      <div className={style.inputBtnDiv}>
        <Input 
        className={style.dropDown}
        value={currency} 
        onChange={(e)=>{setCurrency(e.target.value)}}
         />
        <Button appearance="primary">
          Insert
        </Button>
      </div>
    </div>
  )
}

export default Variables;
