import APP_CONFIG from '../../app.config';

export class Node implements d3.SimulationNodeDatum {
  // optional - defining optional implementation properties - required for relevant typing assistance
  index?: string;
  last_name: string;
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
  fx?: number | null;
  fy?: number | null;
  party?: String;
  active: boolean;
  money: number;
  money_max: number; //max of the set, for normalization

  id: string;
  linkCount: number = 0;

  constructor(id) {
    this.id = id;
  }

  normal = () => {
    // return Math.sqrt(this.money / (this.money_max*0.8));
    return this.money / (this.money_max*0.4);
  }


  get r() {
    if(this.id == "center"){
      return 100;
    }
    return Math.max(this.normal() *10, 2)
    // return 50 * this.normal() + 10;
    // return 7;
  }

  get fontSize() {
    return Math.max(this.normal() *4, 1)+"px";
    // return (30 * this.normal() + 10) + 'px';
  }

  get color() {
    if(this.id == "center"){
      return 'white';
    }
    if(!this.active){
      return 'black';
    }else{
      if(this.party.toLowerCase() == 'd'){
        return 'blue';
      }else{
        return 'red';
      }
    }
  }
}
