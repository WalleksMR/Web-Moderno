<template>
    <footer class="footer">
        <span>Copyright <strong>WCoder</strong> 2019-2020</span>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style>
    .footer{
        grid-area: footer;
        background: #DDD;
        color: #333;

        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 10px;
    }
</style>