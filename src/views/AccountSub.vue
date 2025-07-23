<template>
    <div class="row">
        <div><h5>子帳號</h5></div>
            <div class="co-6">
                <router-view name="left"></router-view>
            </div>
            <div class="co-6">
                <router-view name="right"></router-view>
            </div>
            <div class="col-4">
            <div class="list-group">
                <router-link to="/acc/subAcc/subA" class="list-group-item list-group-item-action" aria-current="true">
                    子帳戶A
                </router-link>
                <router-link :to="{name:'子帳號B'}" class="list-group-item list-group-item-action" aria-current="true">
                    子帳戶B
                </router-link>
            </div>
        </div>
    </div>
</template>
