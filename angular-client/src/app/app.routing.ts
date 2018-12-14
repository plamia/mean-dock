import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ManageComponent } from "./components/manage/manage.component";
import { BooklistComponent } from "./components/booklist/booklist.component";
import { BookComponent } from "./components/book/book.component";
import { AddbookComponent } from "./components/addbook/addbook.component";
import { CartComponent } from "./components/cart/cart.component";
import { AboutComponent } from "./pages/about/about.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { BooksComponent } from "./components/books/books.component";
import { RegistrationFormComponent } from "./pages/registration-form/registration-form.component";

const routes: Routes = [
	{
		path: '',
		pathMatch: "full",
		redirectTo: "home"
	},
	{
		path: "home",
		component: HomeComponent,
		children: [
			{
				path: '',
				component: BooklistComponent,
			},
			{
				path: 'book/:id',
				component: BookComponent
			},
			{
				path: 'cart',
				component: CartComponent
			},
			{
				path: 'about',
				component: AboutComponent
			},
			{
				path: 'contact',
				component: ContactComponent
			},
			{
				path: 'registration',
				component: RegistrationFormComponent
			}

		]
	},
	{
		path: "manage",
		component: ManageComponent,
		children: [
			{
				path: '',
				component: BooksComponent
			},
			{
				path: 'book/add',
				component: AddbookComponent
			},
			{
				path: 'book/add/:bookId',
				component: AddbookComponent
			},

		]
	},
	{
		path:'**',
	
		redirectTo: "home"
	}

]

export const routing = RouterModule.forRoot(routes);