const dateInpTpl = require("./tpl/date-inp.xtpl");
const buttonTpl = require("./tpl/button.xtpl");
const chooseBtnTpl = require("./tpl/choose-btn.xtpl");
const inlineBtnTpl = require("./tpl/inline-btn.xtpl");

export default [

    //button

    {
        navTit: "按钮",
        list: [

            {
                itemTit: "普通按钮",
                itemTpl: buttonTpl
            },
            {
                itemTit: "右下角带对勾的选择按钮",
                itemTpl: chooseBtnTpl
            },
            {
                itemTit: "文字按钮",
                itemTpl: inlineBtnTpl
            },

        ]
    },

    //input

    {
        navTit: "输入框",
        list: [

            {
                itemTit: "日期输入框",
                itemTpl: dateInpTpl
            }

        ]
    },




]