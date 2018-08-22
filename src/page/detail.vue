<template>
    <div id="el">
			<div class="logo">
				<img :src="coupon.pictUrl" />
			</div>
			<div class="content">
				<p class="title"  v-cloak><span v-if=" coupon.userType='1' ">天猫</span><span v-else>淘宝</span>{{coupon.title}}</p>
				<div class="fl">
					<p class="quan">
						<span class="quanmoney">
							<em>券</em>
							<strong  v-cloak>￥{{coupon.couponMoney}}</strong>
						</span>
						<span class="quanhou">券后</span>
						<span class="biao">￥</span>
						<span class="price"  v-cloak>{{calcPrice(coupon.zkFinalPrice,coupon.couponMoney)}}</span>
						<em class="yuanjia"  v-cloak>原价￥{{coupon.zkFinalPrice}}</em>
					</p>
				</div>
			</div>
			<div class="tpwd" id="tpwd">
				<p  v-cloak>长按复制这条信息，{{coupon.couponTpwd}}<br/>打开【手机淘宝】即可查看</p>
			</div>
			<button @click="copy()"  v-cloak>{{message}}</button>
	</div>
</template>

<script>
// import { 'taobaoUrl' } from "../api.js";
export default {
    data() {
        return {
            coupon: [],
            message:'一键复制'
        }
  },
  methods:{
  	calcPrice(price,couponMoney){
  		return (price - couponMoney || 0).toFixed(2);
  	},
	copy() {
		var Url2=document.getElementById("tpwd").innerText;
        var oInput = document.createElement('input');
        oInput.value = Url2;
        document.body.appendChild(oInput);
        oInput.select(); // 选择对象
        document.execCommand("Copy"); // 执行浏览器复制命令
        oInput.className = 'oInput';
        oInput.style.display='none';
		this.message = '已复制，请打开手机淘宝';
	},
	//  getUrlKey:function(name){
		//  this.query.id
	//   return decodeURIComponent((new RegExp('[?|&]'+name+'='+'([^&;]+?)(&|#|;|$)').exec(location.href)||[,""])[1].replace(/\+/g,'%20'))||null;
	//  }
  },
  created(){
        console.log(document.title)
  		let id=this.$route.query.id
        // 这样会有跨域问题
        let url = 'https://www.dliberty.com/tb/coupon/' + id
        this.axios.get(url)
		.then( (response)=> {
			this.coupon = response.data.coupon;
			document.title = this.coupon.title
		})
		.catch(function (error) {
			console.log(error);
		});
 
        
    },
}
</script>

<style scoped>
input,button,select,textarea{outline:none;}
.logo{
	width: 82%;
	margin: 15px auto;
}
.logo img{
	width: 100%;
}
.content{
	width: 92.67%;
	margin: 0 auto;
	overflow: hidden;
}
.title{
	font-size: 16px;
	color: #000;
	line-height: 24px;
}
.title span{
	color: red;
	padding: 0 10px;
	border: 1px solid red;
	border-radius: 6px;
	margin-right: 5px;
	background: #fffcfc;
}

.quan{
	height: 48px;
	line-height: 48px;
}
.quan .quanmoney{
	border: 1px solid #ff3c3c;
	border-radius: 5px;
	font-size: 14px;
	display: inline-block;
    height: 24px;
    line-height: 24px;
	margin-right: 5px;
}
.quan .quanmoney em{
	font-style: normal;
	background: #ff3c3c;
	color: #fff;
	display: inline-block;
	padding: 0 5px;
}
.quan .quanmoney strong{
	color: #ff3c3c;
	display: inline-block;
	padding-right: 5px;
	font-weight: normal;
}
.quan .quanhou{
	color: #666;
	font-size: 14px;
}
.quan .biao{
	color: #ff3c3c;
	font-size: 14px;
}
.quan .price{
	color: #ff3c3c;
	font-size: 28px;
	font-weight: 600;
}
.quan .yuanjia{
	color: #666;
	font-size: 14px;
	text-decoration: line-through;
	padding-left: 5px;
}
.yishou{
	display: inline-block;
	background: #e8e8e8;
	color: #666;
	font-size: 14px;
	padding: 0 15px;
	height: 28px;
	line-height: 28px;
	border-radius: 14px;
}

.tpwd{
	clear: both;
	width: 92.67%;
	height: 56px;
	background: #fef7f7;
	border: 2px dashed #ff5f5f;
	margin: 15px auto;
	text-align: center;
}
.tpwd p {
	margin-top: 9px;
    font-size: 14px;
    color: #000;
    height: 38px;
}
button{
	width: 92.67%;
	background: #ff4c3c;
	color: #fff;
	text-align: center;
	height: 45px;
	line-height: 45px;
	border: none;
	font-size: 20px;
	border-radius: 22.5px;
	margin-left: 3.665%;
}

</style>
