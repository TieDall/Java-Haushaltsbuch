package model;
// Generated 24.07.2018 14:18:10 by Hibernate Tools 4.3.1


import java.util.HashSet;
import java.util.Set;

/**
 * Person generated by hbm2java
 */
public class Person  implements java.io.Serializable {


     private int id;
     private String name;
     private boolean isDeleted;
     private Set paymentses = new HashSet(0);

    public Person() {
    }

	
    public Person(int id, String name, boolean isDeleted) {
        this.id = id;
        this.name = name;
        this.isDeleted = isDeleted;
    }
    public Person(int id, String name, boolean isDeleted, Set paymentses) {
       this.id = id;
       this.name = name;
       this.isDeleted = isDeleted;
       this.paymentses = paymentses;
    }
   
    public int getId() {
        return this.id;
    }
    
    public void setId(int id) {
        this.id = id;
    }
    public String getName() {
        return this.name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    public boolean isIsDeleted() {
        return this.isDeleted;
    }
    
    public void setIsDeleted(boolean isDeleted) {
        this.isDeleted = isDeleted;
    }
    public Set getPaymentses() {
        return this.paymentses;
    }
    
    public void setPaymentses(Set paymentses) {
        this.paymentses = paymentses;
    }




}


