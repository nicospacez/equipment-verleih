package com.equipmentverleih.equipmentverleih;

import android.support.v4.app.FragmentManager;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.HashMap;
import java.util.Map;

import java.util.HashMap;
import java.util.Map;

public class MainActivity extends AppCompatActivity {

    RequestQueue requestQueue;

    FragmentManager fm;
    JSONObject jsonData = null;

    ListFragment lf;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        this.requestQueue = Volley.newRequestQueue(this);
        this.fm = getSupportFragmentManager();
        this.lf = new ListFragment();
        fm.beginTransaction().add(R.id.fragment_container,this.lf).commit();
    }



    public void getProducts(){
        JSONObject jsonO = null;

        String url = "http://192.168.99.100:8080/jee/app/produkt";
        StringRequest ExampleStringRequest = new StringRequest(Request.Method.GET, url, new Response.Listener<String>() {
            @Override
            public void onResponse(String response) {
                System.out.println(response);
                try {
                   JSONObject jsonO = new JSONObject(response);
                   setJsonData(jsonO);
                } catch (JSONException e) {
                    e.printStackTrace();
                }
            }
        }, new Response.ErrorListener() { //Create an error listener to handle errors appropriately.
            @Override
            public void onErrorResponse(VolleyError error) {
                //This code is executed if there is an error.
            }
        });

        this.requestQueue.add(ExampleStringRequest);
    }

    public void setJsonData(JSONObject obj){
        this.jsonData = obj;
        System.out.println(this.jsonData);
        this.lf.setListData(this.jsonData);

    }
}
