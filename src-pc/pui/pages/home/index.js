import pageData from "./data.js";

export default {

    //当前激活的nav index
    _curActiveIndex: 0,

    data() {
        return {
            pageData: pageData,
            curList: pageData[0]["list"],
            curActiveIndex: 0
        }
    },

    created() {

        var _this = this;
        // setTimeout(function () {
        //     _this.curActiveIndex = 1;
        // },3000)
    
    },

    methods: {
        onNavClick(index) {
            this.curActiveIndex = index;
            this.curList = pageData[index]["list"];
        }
    }

    

}