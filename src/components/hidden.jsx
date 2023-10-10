"use client";

import { Carousel } from "flowbite-react";
import CardTwo from "./CardTwo";
export default function Hidden() {
  return (
    <Carousel indicators={true} autoPlay={true} infinite="true" arrows="true">
      <>
        <div className=" p-5">
          <CardTwo
            title={"Pendirian PT PMA Complete"}
            price={"RP.15.000.00"}
            text1={"Package Includes:"}
            text2={"Brand Perfomance Analytics"}
            text3={"Daily Prices Change Notifications"}
            text4={"Marketplace Price Tracking"}
            text5={"Stock Availability Monitoring"}
            text6={"Marketplace Price Tracking"}
          />
        </div>
      </>
      <>
        <div className=" p-5">
          <CardTwo
            title={"Pendirian PT PMA Complete"}
            price={"RP.15.000.00"}
            text1={"Package Includes:"}
            text2={"Brand Perfomance Analytics"}
            text3={"Daily Prices Change Notifications"}
            text4={"Marketplace Price Tracking"}
            text5={"Stock Availability Monitoring"}
            text6={"Marketplace Price Tracking"}
          />
        </div>
      </>
      <>
        <div className=" p-5">
          <CardTwo
            title={"Pendirian PT PMA Complete"}
            price={"RP.15.000.00"}
            text1={"Package Includes:"}
            text2={"Brand Perfomance Analytics"}
            text3={"Daily Prices Change Notifications"}
            text4={"Marketplace Price Tracking"}
            text5={"Stock Availability Monitoring"}
            text6={"Marketplace Price Tracking"}
          />
        </div>
      </>
      <>
        <div className=" p-5">
          <CardTwo
            title={"Pendirian PT PMA Complete"}
            price={"RP.15.000.00"}
            text1={"Package Includes:"}
            text2={"Brand Perfomance Analytics"}
            text3={"Daily Prices Change Notifications"}
            text4={"Marketplace Price Tracking"}
            text5={"Stock Availability Monitoring"}
            text6={"Marketplace Price Tracking"}
          />
        </div>
      </>
    </Carousel>
  );
}
