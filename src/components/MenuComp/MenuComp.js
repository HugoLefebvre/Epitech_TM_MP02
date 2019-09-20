export default {
  name: 'menucomp',
  components: {},
  props: [],
  data () {
    return {

    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
      disconnectUser: function(){
          window.localStorage.removeItem('AccessKey');
          this.$parent.AccessKey = "";
      }
  }
}
