<template>
  <div class="main-section">
    <h1>吳秉叡：反對民進黨版勞基法 將來選舉可不投民進黨</h1>
    <p>
      既然這樣，大家來打電話給自己選區的立法委員，告訴他們如果不公開反對一例一休、<strong>砍掉七天國定假日</strong>，下次立法委員選舉就照吳秉叡委員說的，再也不要支持民進黨了吧！
    </p>
    <h2>選擇你的選區</h2>
    <select class="form-control cities" v-model="selectedCity">
      <option v-for="city in cities" :value="city">{{city}}</option>
    </select>
    <select class="form-control districts" v-model="selectedDistrict">
      <option v-for="district in districts" :value="district">{{district}}</option>
    </select>
    <h2>你的選區立委是</h2>
    <p>
      <div class="legislator-name">{{legislator.name}}</div>
      <div class="legislator-phone">{{legislator.labTel}}</div>
    </p>
    <p v-if="legislator.party && legislator.party !== '民主進步黨'">
      你不需要打電話，他是 {{legislator.party}} 籍的立法委員
    </p>
    <div class="example" v-if="legislator.party === '民主進步黨'">
      <h2>參考通話內容（點選可編輯）</h2>
      <p contenteditable>
        你好，請問是 {{legislator.name}} 委員的辦公室嗎？我是 {{selectedDistrict}} 的選民，我想要表達選民意見。吳秉叡委員開記者會時說「如果反對民進黨版本勞基法草案，以後選舉可以不投民進黨」，請你轉告 {{legislator.name}} 委員，如果委員不公開反對一例一休、<strong>砍七天假</strong> 的勞基法修法版本，我以後選舉絕對不會投給你，如果有人發動罷免我也會去投贊成票。請委員認真考慮選民的意見，公開反對<strong>一例一休、砍七天假</strong>
      </p>
    </div>
    <div class="footer">回報臭蟲 | GitHub project</div>
  </div>
</template>

<script>
import legislators from '../legislators.json';

export default {
  name: 'main-section',
  computed: {
    legislator() {
      const empty = { name: '' };
      return this.legislators[this.selectedCity] ?
             this.legislators[this.selectedCity][this.selectedDistrict] || empty :
             empty;
    },
    districts() {
      return this.legislators[this.selectedCity] ?
             Object.keys(this.legislators[this.selectedCity]) :
             '';
    },
  },
  data() {
    const cities = Object.keys(legislators);
    return {
      legislators,
      cities,
      districts: [],
      selectedCity: '臺北市',
      selectedDistrict: '',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

.main-section {
  max-width: 900px;
  margin: auto;
}

strong {
  font-weight: bold;
  color: red;
}

.example p {
  max-width: 800px;
  margin: auto;
  border: 1px dotted grey;
  padding: 50px;
}

.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  width: 100%;
}
</style>
