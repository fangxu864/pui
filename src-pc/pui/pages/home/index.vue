<template>
    <div>
        <div class="grid">

            <div class="grid__cell 1/7">
                <!-- 侧边导航栏 -->
                <ul class="m-side">
                    <li class="m-side__item" :class="curActiveIndex == index ? 'active' : ''" v-for="(item, index) in pageData" :data-index="index" @click="onNavClick(index)">
                        {{item.navTit}}
                    </li>
                </ul>
            </div>

            <div class="grid__cell 6/7">
                <!-- 右边内容区域 -->
                <ul>
                    <li v-for="item in curList">
                        <div class="block">
                            <div class="block__title">{{item.itemTit}}</div>
                            <div class="block__content" v-html="item.itemTpl"></div>
                            <div class="block__code">
                                <highlight-code lang="javascript">{{item.itemTpl}}</highlight-code>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    </div>
</template>

<style scoped src="./index.scss" lang="scss"></style>
<script src="./index.js"></script>