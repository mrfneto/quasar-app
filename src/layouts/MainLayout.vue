<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>
        <EssentialLink name="home" title='Home'/>
        <q-separator :key="index"/>
        <template v-for="(item, index) in essentialLinks">
          <EssentialLink
            :key="item.title"
            v-bind="item"
            name="page"
            v-if="!item.children"
          />
          <EssentialMenuLink
            :key="item.title"
            v-bind="item"
            name="subpage"
            v-else
          />
          <q-separator :key="index"/>
        </template>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view :key="$route.path" />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'
import EssentialMenuLink from 'components/EssentialMenuLink.vue'

const linksData = [

  {
    title: 'Home',
    link: 'home'
  },  
  {
    title: 'Blog',
    link: 'lorem-ipson'
  },  
  {
    title: 'Services',
    link: 'services',
    children: [
      {
        title: 'Teste',
        link: 'teste'
      },  
    ]
  },  
 
];

export default {
  name: 'MainLayout',
  components: { EssentialLink, EssentialMenuLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  }
}
</script>
