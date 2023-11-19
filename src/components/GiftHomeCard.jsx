import React from "react";

export const GiftHomeCard = (props) => {

    const formattedDate = new Date(props.delivery_date).toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <div className="flex w-full items-start justify-between rounded-xl my-1 border-[1px] border-[transparent] dark:hover:border-white/20 bg-white px-3 py-2 transition-all duration-150 hover:border-gray-200 dark:!bg-navy-800 dark:hover:!bg-navy-700">
            <div className="flex items-center gap-3 w-full">
                <div className="flex h-16 w-16 items-center justify-center">
                    <img
                        className="h-full w-full rounded-xl"
                        src={props.image}
                        alt=""
                    />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            {props.category}
                        </div>
                        <div className="col">
                            {props.shop}
                        </div>
                        <div className="col">
                            {props.price} €
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h5 className="mt-2">{props.name}</h5>
                        </div>
                    </div>
                    <div className="row">
                        <p className="mt-1 text-sm font-normal text-gray-600">
                            <i className="fa-solid fa-truck-fast"></i> Delivery date: {formattedDate}
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-1 flex items-center justify-center text-navy-700 dark:text-white">
                <div>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path></svg>
                </div>
                <div className="ml-1 flex items-center text-sm font-bold text-navy-700 dark:text-white">
                    <p>   </p>
                    0.4<p className="ml-1">ETH</p>
                </div>
                <div className="ml-2 flex items-center text-sm font-normal text-gray-600 dark:text-white">
                    <p>30s</p>
                    <p className="ml-1">ago</p>
                </div>
            </div>
        </div>
    )
}