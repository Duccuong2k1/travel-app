import React from "react";
import { Banner, Button, ButtonSreach } from "../../components";
import { CardSlice, Customer, Discount, FilterSearch, HowWorking } from "./components";
import { FcApproval } from "react-icons/fc";
import "./Home.scss";
import { Link } from "react-router-dom";
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
];
const dataTips= [
	{
		img:"https://images.unsplash.com/photo-1504598318550-17eba1008a68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80",
		nameTips:"Hiểu nơi mình đến và biết rõ đường mình đi",
		dayCreate:"july 25/2021",
		descTips:"Người có chân “đi” đôi khi hay có chuyện “thích là nhích” – có cảm hứng là xách balo lên và đi ngay lập tức. Chẳng hạn có người sáng bảo là thích Đà Lạt thì chiều đã xách xe máy vượt đèo đi ngay."
	},
	{
		img:"https://images.unsplash.com/photo-1508964942454-1a56651d54ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=375&q=80",
		nameTips:"Đừng quên những nguyên tắc an toàn",
		dayCreate:"october 20/2020",
		descTips:"Dù đi du lịch theo nhóm hay đi một mình, bạn cũng cần nắm rõ những nguyên tắc an toàn nhất định khi dịch chuyển và bảo toàn hành lý."
	},
	{
		img:"https://images.unsplash.com/photo-1483247416020-58799b6de4c1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
		nameTips:"Học kinh nghiệm từ người đi trước",
		dayCreate:"september 20/2021",
		descTips:"Hiện nay có nhiều group chia sẻ kinh nghiệm đi du lịch và phượt trên mạng xã hội và internet như phuot.vn, ivivu.com hay những fanpage của dân "
	},
];

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
			<Customer />
			<div className="home-tips-travel">
				<h3>Stay update with travio tips</h3>
				<div className="home-tips-travel__content">
					{
						dataTips.map((tip,index) => {
							return(
								<Link to={`/Blog/${tip.nameTips}`} className="box-tip" key={index}>
									<img src={tip.img} alt={tip.nameTips} />
									<h5>{tip.nameTips} </h5>
									<span>By<b>Admin</b>- {tip.dayCreate}</span>
									<p>{tip.descTips}</p>
								</Link>
							)
						})
					}
					
				</div>
				<div className="redirect-detail">
					<Link to="/Blog">
						<Button name="All Blog Posts"/>
					</Link>
				</div>
			</div>
			<div className="subscribe">
				<h3>subscribe our newsletter and get updates every time.</h3>
				<form className="subscribe__input">
					<input type="email" placeholder="enter your email" />
					<ButtonSreach name="Get Started" />
				</form>
				<div className="canvan">
				<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
					<path fill="#F2CECE" d="M49.7,-49.2C63.4,-36,72.8,-18,75.1,2.3C77.4,22.6,72.7,45.3,59,52.9C45.3,60.6,22.6,53.2,6,47.2C-10.6,41.2,-21.2,36.5,-23.4,28.8C-25.5,21.2,-19.3,10.6,-18.9,0.3C-18.6,-10,-24.3,-19.9,-22.1,-33.1C-19.9,-46.2,-10,-62.5,4,-66.6C18,-70.6,36,-62.3,49.7,-49.2Z" transform="translate(100 100)" />
				</svg>
				</div>	
			</div>
		</div>
  );
};
