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
          console.log(this.$parent.$parent.AccessKey)
          console.log(this.$parent.$parent.IdUser)
          window.localStorage.removeItem('AccessKey');
          this.$parent.$parent.AccessKey = "";
          this.$router.push("/");
      }
  }
}
