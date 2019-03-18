import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
	powers = ["Really Smart", "Super Flexible", "Super Hot", "Weather Changer"];
	model = new Hero(18, "Dr IQ", this.powers[0], "Chuck Overstreet");
	submitted = false;
	
	onSubmit(){
		this.submitted = true;
	}

	ngOnInit(){}
	
	newHero(){
		this.model = new Hero(42, '', '');
	}
}
