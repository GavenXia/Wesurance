<template>
    <div style="padding:15px;">
                <p>Displayed and owned by</p>

                <div class="headerimgs">
                <img class="headerimg" src="@/assets/images/CompanyLogo@3x.png" alt="">
                 </div>

               <h1>TraveLead Travel Insurance - Essential Plan</h1>

        <p>Most budget choice - covering medical expenses.</p>
        <div style="color:rgb(142,142,147);">Travel Insurance</div>
        <div class="price">HK$190</div>
        <div><img class="box" src="@/assets/images/starrTraveLeadEssential.png" alt=""></div>
        <div>
            <span><span>5</span>Days</span><span>|</span>
            <span class="adults"><img class="adultsimg" src="@/assets/images/Adults@3x.png" alt=""></span><span>3</span>
            <span class="friends"><img class="friendsimg" src="@/assets/images/friends Copy@3x.png"></span><span>1</span>
        </div>

    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    }
}
</script>

<style scoped>
*{
    text-align: left
}
.headerimgs{
    width: 165px;
    height: 76px;
}
.headerimg{
    width: 100%;
    height: 100%;
}
.price{
    text-align:right;
    color: rgb(12, 129, 255);
    font-size: 35px;
    font-weight: bold;
    margin-bottom: 35px;
}
.box{
    border-radius: 10px;
}
.adults{
    display: inline-block;
    width: 35px;
    height: 35px;
}
.adultsimg{
    width: 100%;
    height: 100%;
}
.friends{
    display: inline-block;
    width: 30px;
    height: 30px;
}
.friendsimg{
    width: 100%;
    height: 100%;
}
</style>