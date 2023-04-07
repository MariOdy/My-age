"use client";
import React, { useCallback, useState } from "react";
import { SelectDatepicker } from "react-select-datepicker";
import Result from "../Result";

import styles from "./styles.module.scss";
import Arrow from "@/public/svg/arrow";

type Age = {
  year: number;
  month: number;
  day: number;
};

const AgeByDate = () => {
  const [age, setAge] = useState<Age>({ year: 0, month: 0, day: 0 });
  const [value, setValue] = useState<Date | null>(null);

  const onDateChange = useCallback((date: Date | null) => {
    setValue(date);
  }, []);

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  const getAge = (v: Date | null) => {
    const today = new Date();
    if (v) {
      const birthDate = new Date(v);
      let y = today.getFullYear() - birthDate.getFullYear();
      let m = today.getMonth() - birthDate.getMonth();
      let d = today.getDate() - birthDate.getDate();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        y--;
        m += 12;
      }
      if (d < 0) {
        m--;
        const temp = new Date(today.getFullYear(), today.getMonth(), 0);
        d += temp.getDate();
      }
      if (y < 0) {
        y = 0;
        m = 0;
        d = 0;
      }
      if (m < 0 && y > 0) {
        m += 12;
        y--;
      }
      setAge({ year: y, month: m, day: d });
    }
  };
  const onClickHandler = () => {
    getAge(value);
  };

  const { year, month, day } = age;

  return (
    <div className={styles.agebydate_wrapper}>
      <SelectDatepicker
        className={styles.select_wrapper}
        selectedDate={value}
        onDateChange={onDateChange}
        labels={{
          dayPlaceholder: "DD",
          monthPlaceholder: "MM",
          yearPlaceholder: "YYYY",
        }}
        maxDate={yesterday}
        hideLabels
      />

      <div className="flex items-center justify-center">
        <span className="w-full h-[1px] bg-black flex-1 md:h-[2px] hidden md:block" />
        <button
          type="button"
          onClick={onClickHandler}
          className={styles.button}
          
        >
          <Arrow />
        </button>
      </div>
      <div className="flex flex-col">
        <Result label="year" result={year} />
        <Result label="month" result={month} />
        <Result label="day" result={day} />
      </div>
    </div>
  );
};

export default AgeByDate;
