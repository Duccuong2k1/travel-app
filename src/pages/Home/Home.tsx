import React from "react";
import { Banner, Button } from "../../components";
import { CardSlice, Discount, FilterSearch, HowWorking } from "./components";
import { FcApproval } from "react-icons/fc";
import "./Home.scss";
const dataListCard =[
	{
		id:1,
		img:"https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
		name:"Hurawalhi island",
		place:"malaysia",
		day:"7 day 6 night",
		price:620,
		rating:4.7
	},
	{
		id:2,
		img:"https://images.unsplash.com/photo-1529109328884-6818f3c0f109?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
		name:"bali Province",
		place:"indonesia",
		day:"8 day 7 night",
		price:345,
		rating:4.8
	},
	{
		id:3,
		img:"https://images.unsplash.com/photo-1502003148287-a82ef80a6abc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
		name:"spain",
		place:"Barcelona city beach",
		day:"4 day 3 night",
		price:675,
		rating:4.5
	},
	{
		id:4,
		img:"https://images.unsplash.com/photo-1568849676085-51415703900f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
		name:"phu quoc",
		place:"phu quoc",
		day:"4 day 5 night",
		price:973,
		rating:4.8
	},
	{
		id:5,
		img:"https://images.unsplash.com/photo-1513415564515-763d91423bdd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80",
		name:"balan islan",
		place:"balan city",
		day:"9 day 8 night",
		price:754,
		rating:4.7
	},
	{
		id:6,
		img:"https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80",
		name:"hon gai",
		place:"vinh phuc",
		day:"7 day 6 night",
		price:457,
		rating:4.7
	},
	{
		id:7,
		img:"https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=330&q=80",
		name:"vinh ha long",
		place:"quang linh",
		day:"5 day 4 night",
		price:876,
		rating:4.8
	},
]

export const Home = () => {
  return (
		<div className="home">
			<Banner />
			<FilterSearch />
			<HowWorking />
			<Discount />
			<div className="home-introduce">
				<div className="home-introduce__left">
					<img src="https://images.unsplash.com/photo-1591448764624-d7973a442bff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="" />
					<iframe src="https://www.youtube.com/embed/XszJkmsrccI" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
					<div className="box">
						<FcApproval className="icon"/>
						<p>100%</p>
						<span>Ventilated</span>
					</div>
				</div>
				<div className="home-introduce__right">
					<h3>World best travel agency company since</h3>
					<p>Travel agency company World best travel agency company since something fancy</p>
					<Button name="Find Best Tours"/>
				</div>
			</div>
			{/* end */}
			<CardSlice dataTours={dataListCard}/>
		</div>
  );
};
