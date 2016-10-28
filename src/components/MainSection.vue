<template>
  <div class="main-section">
    <h1>打電話給立委來表達你對<strong>砍七天假</strong>的不滿！</h1>
    <p>
      民進黨執意要在一例一休法案中，實際偷渡<strong>砍掉七天國定假日</strong>的修法，而吳秉叡更說出：「<strong>反對民進黨版勞基法 將來選舉可不投民進黨</strong>」！既然這樣，大家來打電話給自己選區的立法委員，告訴他們如果不公開<strong>砍掉七天國定假日</strong>的修法，下次立法委員選舉就照吳秉叡委員說的，再也不要支持民進黨了吧！
    </p>
    <h2>選擇你的選區</h2>
    <select class="form-control cities" v-model="selectedCity">
      <option v-for="city in cities" :value="city">{{city}}</option>
    </select>
    <select class="form-control districts" v-model="selectedDistrict">
      <option v-for="district in districts" :value="district">{{district}}</option>
    </select>
    <h2>你的選區立委是</h2>
    <div class="legislator">
      <div class="legislator-name">{{legislator.name}}</div>
      <div class="legislator-phone">{{legislator.labTel}}</div>
    </div>
    <p v-if="legislator.party && legislator.party !== '民主進步黨'">
      你不需要打電話，他是 {{legislator.party}} 籍的立法委員
    </p>
    <div class="example" v-if="legislator.party === '民主進步黨'">
      <h2>參考通話內容（點選可編輯）</h2>
      <div contenteditable>
        <p>
          你好，請問是 <strong>{{legislator.name}}</strong> 委員的辦公室嗎？我是 <strong>{{selectedDistrict}}</strong> 的選民，我對民進黨強勢通過 <strong>砍七天假</strong> 版本的勞基法草案感到非常不滿。吳秉叡委員開記者會時說「如果反對民進黨版本勞基法草案，以後選舉可以不投民進黨」，請告訴 <strong>{{legislator.name}}</strong> 委員，如果委員不公開反對 <strong>砍七天假</strong> 的勞基法修法版本，在院會提案退回委員會以及二讀投反對票，我以後：
        </p>
        一、下次立委選舉絕對不會投給你<br>
        二、2018 縣長選舉也不會投給民進黨<br>
        <p>
          請委員認真考慮選民的意見，公開反對 <strong>砍七天假</strong> 勞基法修法。
        </p>
      </div>
    </div>
    <div class="footer">
      <a href="https://github.com/7holidays/7holidays.github.io/issues">回報臭蟲</a> |
      <a href="https://github.com/7holidays/7holidays.github.io">GitHub project</a> |
      <a href="https://g0v.hackpad.com/ep/pad/static/t5nla4R4Dft" target="_blank">資料來源：立委咖電喂</a> |
      <a href="http://join.g0v.today/">徵求更好的設計與文案，請加入 g0v 聊天室</a>
    </div>
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
      this.selectedDistrict = '';
      return this.legislators[this.selectedCity] ?
             Object.keys(this.legislators[this.selectedCity]) :
             [];
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

.example div {
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

.legislator {
  font-size: larger;
  font-weight: bold;
}
</style>
