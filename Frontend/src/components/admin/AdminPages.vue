<template>
    <div class="admin-pages">
        <PageTitle icon="fa fa-cogs" main="Administração do Sistema" sub="Cadastros & Cia"/>
        <div class="admin-pages-tabs">
            <b-card no-body>
                <b-tabs card>
                    <b-tab title="Artigos" active>
                        <Articles/>
                    </b-tab>
                    <b-tab title="Categorias">
                        <Categories />
                    </b-tab>
                    <b-tab title="Usuários">
                        <Users />
                    </b-tab>
                </b-tabs>
            </b-card>
        </div>
    </div>
</template>

<script>
import Articles from './ArticlesAdmin'
import Categories from './CategoriesAdmin'
import Users from './UsersAdmin'
import PageTitle from '../template/PageTitle'

export default {
    name: 'AdminPages',
    components: { PageTitle, Articles, Categories, Users }

}
</script>

<style>

</style>