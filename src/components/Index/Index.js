import MenuComp from "../MenuComp/index"
import LoginPage from "../Login/LoginPage/index"

export default {
  name: 'index',
  components: {
      MenuComp,
      LoginPage
  },
  props: [],
  data () {
    return {
        AccessKey:''
    }
  },
  computed: {
  },
  mounted () {
      if (localStorage.AccessKey) {
          this.AccessKey = localStorage.AccessKey;
      }
  },
  methods: {
      
  },
}
