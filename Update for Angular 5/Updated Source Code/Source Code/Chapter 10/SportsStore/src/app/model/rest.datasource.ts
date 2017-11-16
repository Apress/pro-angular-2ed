import { Injectable } from "@angular/core";
import { Http, Request, RequestMethod } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Product } from "./product.model";
import { Cart } from "./cart.model";
import { Order } from "./order.model";
import "rxjs/add/operator/map";

const PROTOCOL = "http";
const PORT = 3500;

@Injectable()
export class RestDataSource {
    baseUrl: string;
    auth_token: string;

    constructor(private http: Http) {
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }

    authenticate(user: string, pass: string): Observable<boolean> {
        return this.http.request(new Request({
            method: RequestMethod.Post,
            url: this.baseUrl + "login",
            body: { name: user, password: pass }
        })).map(response => {
            let r = response.json();
            this.auth_token = r.success ? r.token : null;
            return r.success;
        });
    }

    getProducts(): Observable<Product[]> {
        return this.sendRequest(RequestMethod.Get, "products") as Observable<Product[]>;
    }

    saveProduct(product: Product): Observable<Product> {
        return this.sendRequest(RequestMethod.Post, "products",
            product, true) as Observable<Product>;
    }

    updateProduct(product): Observable<Product> {
        return this.sendRequest(RequestMethod.Put,
            `products/${product.id}`, product, true) as Observable<Product>;
    }

    deleteProduct(id: number): Observable<Product> {
        return this.sendRequest(RequestMethod.Delete,
            `products/${id}`, null, true) as Observable<Product>;
    }

    getOrders(): Observable<Order[]> {
        return this.sendRequest(RequestMethod.Get,
            "orders", null, true) as Observable<Order[]>;
    }

    deleteOrder(id: number): Observable<Order> {
        return this.sendRequest(RequestMethod.Delete,
            `orders/${id}`, null, true) as Observable<Order>;
    }

    updateOrder(order: Order): Observable<Order> {
        return this.sendRequest(RequestMethod.Put,
            `orders/${order.id}`, order, true) as Observable<Order>;
    }

    saveOrder(order: Order): Observable<Order> {
        return this.sendRequest(RequestMethod.Post,
            "orders", order) as Observable<Order>;
    }

    private sendRequest(verb: RequestMethod,
            url: string, body?: Product | Order, auth: boolean = false)
                : Observable<Product | Product[] | Order | Order[]> {

        let request = new Request({
            method: verb,
            url: this.baseUrl + url,
            body: body
        });
        if (auth && this.auth_token != null) {
            request.headers.set("Authorization", `Bearer<${this.auth_token}>`);
        }
        return this.http.request(request).map(response => response.json());
    }
}
