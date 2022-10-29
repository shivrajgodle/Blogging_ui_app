import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { categories } from '../../model/categories';
import { BlogService } from '../../service/blog.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  blogpost: FormGroup;
  loader: boolean = false;

  blog = {
  title: null,
  content:null,
  selectedCity1:''
  }


  
  
  value2:any;
  value1:any;
  cities: any[];

  categories: categories[]=[]
  categoryTitle: any[]=[]



  
  constructor(private blogservice:BlogService) { 

    this.blogpost = new FormGroup({
      title:new FormControl("",Validators.required),
      content:new FormControl("",Validators.required),
      category:new FormControl("",Validators.required),
    });


    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];
  }

  ngOnInit(): void {

    this.blogservice.fetchAllCategories().subscribe((responce:any)=>{
    
      this.categories = responce
      console.log(this.categories);
      //this.categories.forEach(category => console.log(category.categoryTitle))
      //this.categoryTitle = this.categories.map(category=> category.categoryTitle)
    },
    (error)=>{
      console.log("error",error);
    })    
  }

  createPost(){

    console.log("hello i am shivraj",this.blogpost.value);

    this.blogservice.postBlog(this.blogpost.value).subscribe((data:any)=>{
      console.log(data);
    },
    (error)=>{
      console.log("error",error);
    })

    
   
    
  }

}
