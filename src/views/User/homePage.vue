<template>
    <div class="homepage">
        <table cellspacing="0">
            <tr v-for="item in submit_history" :key="item">
                <td align="center" class="text-h2">{{ item.origin_name }}</td>
                <td align="center" class="text-normal">{{ item.creation_time }}</td>
                <td align="center" class="text-normal"><p>{{ item.description }}</p></td>
                <td align="center" class="text-normal">{{ item.audit_status }}</td>
                <td align="center">
                    <p class="text-href">查看详情</p>
                </td>
            </tr>
        </table>
    </div>
</template>
<script setup>
import { reactive } from "vue"

const submit_history = reactive([
    {origin_name:"标题XXXxxxxxxxxxxxxx", creation_time:"2023-10-14 17:57:09", description:"1234567xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx89012345678901234567890", audit_status:"待审核", content_uuid:"111111"},
    {origin_name:"标题XXX", creation_time:"2023-10-14 17:57:09", description:"123456789012345678901234567890", audit_status:"待审核", content_uuid:"111111"},
    {origin_name:"标题XXX", creation_time:"2023-10-14 17:57:09", description:"123456789012345678901234567890", audit_status:"待审核", content_uuid:"111111"},
    {origin_name:"标题XXX", creation_time:"2023-10-14 17:57:09", description:"12345", audit_status:"待审核", content_uuid:"111111"},
    {origin_name:"标题XXX", creation_time:"2023-10-14 17:57:09", description:"123456789012345678901234567890", audit_status:"待审核", content_uuid:"111111"},
    {origin_name:"标题XXX", creation_time:"2023-10-14 17:57:09", description:"123456789012345678901234567890", audit_status:"待审核", content_uuid:"111111"},
    {origin_name:"标题XXX", creation_time:"2023-10-14 17:57:09", description:"123456789012345678901234567890", audit_status:"待审核", content_uuid:"111111"},
    {origin_name:"标题XXX", creation_time:"2023-10-14 17:57:09", description:"123456789012345678901234567890", audit_status:"待审核", content_uuid:"111111"},
    {origin_name:"标题XXX", creation_time:"2023-10-14 17:57:09", description:"123456789012345678901234567890", audit_status:"待审核", content_uuid:"111111"},
    {origin_name:"标题XXX", creation_time:"2023-10-14 17:57:09", description:"123456789012345678901234567890", audit_status:"待审核", content_uuid:"111111"},
    {origin_name:"标题XXX", creation_time:"2023-10-14 17:57:09", description:"123456789012345678901234567890", audit_status:"待审核", content_uuid:"111111"},
    {origin_name:"标题XXX", creation_time:"2023-10-14 17:57:09", description:"123456789012345678901234567890", audit_status:"待审核", content_uuid:"111111"},
    {origin_name:"标题XXX", creation_time:"2023-10-14 17:57:09", description:"123456789012345678901234567890", audit_status:"待审核", content_uuid:"111111"},
    {origin_name:"标题XXX", creation_time:"2023-10-14 17:57:09", description:"123456789012345678901234567890", audit_status:"待审核", content_uuid:"111111"},
    {origin_name:"标题XXX", creation_time:"2023-10-14 17:57:09", description:"123456789012345678901234567890", audit_status:"待审核", content_uuid:"111111"},
    {origin_name:"标题XXX", creation_time:"2023-10-14 17:57:09", description:"123456789012345678901234567890", audit_status:"待审核", content_uuid:"111111"},
    {origin_name:"标题XXX", creation_time:"2023-10-14 17:57:09", description:"123456789012345678901234567890", audit_status:"待审核", content_uuid:"111111"},
    {origin_name:"标题XXX", creation_time:"2023-10-14 17:57:09", description:"123456789012345678901234567890", audit_status:"待审核", content_uuid:"111111"},
    {origin_name:"标题XXX", creation_time:"2023-10-14 17:57:09", description:"123456789012345678901234567890", audit_status:"待审核", content_uuid:"111111"},
    {origin_name:"标题XXX", creation_time:"2023-10-14 17:57:09", description:"123456789012345678901234567890", audit_status:"待审核", content_uuid:"111111"},
    {origin_name:"标题XXX", creation_time:"2023-10-14 17:57:09", description:"123456789012345678901234567890", audit_status:"待审核", content_uuid:"111111"},
    {origin_name:"标题XXX", creation_time:"2023-10-14 17:57:09", description:"123456789012345678901234567890", audit_status:"待审核", content_uuid:"111111"},
])
</script>

<style scoped>
.homepage{
    padding-top:5vh;
    padding-bottom: 5vh;
    width:85vw;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left:15vw;
    top:0;
}
table{
    width:70vw;
    border-spacing: 0;
    border-collapse: collapse;
}
td{
    padding:1vh;
    max-width: 10vw;
    white-space: nowrap;
    text-overflow: ellipsis;
    border:1px #000000 solid;
    overflow: hidden;
    
}
</style>