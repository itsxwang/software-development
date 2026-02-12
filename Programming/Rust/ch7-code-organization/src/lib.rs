use std::arch::naked_asm;

use crate::front_of_house::red;

mod front_of_house;

// Define a struct to represent a Restaurant
pub struct Restaurant { 
    pub name: String,
    capacity: u32,
    current_customers: u32,
    is_open: bool,
} 


impl Restaurant {
    // Associated function (like a static method) to create a new Restaurant
    pub fn new(name: String, capacity: u32) -> Self {
        Restaurant {
            name,
            capacity,
            current_customers: 0,
            is_open: false,
        }
    }

    // Method to open the restaurant
    pub fn open(&mut self) {
        self.is_open = true;
        println!("{} is now open!", self.name);
    }

    // Method to close the restaurant
    pub fn close(&mut self) {
        self.is_open = false;
        println!("{} is now closed.", self.name);
    }

    // Method to admit customers
    pub fn admit_customers(&mut self, count: u32) -> Result<(), String> {
        if !self.is_open {
            return Err("Restaurant is closed".to_string());
        }

        if self.current_customers + count > self.capacity {
            return Err("Not enough capacity".to_string());
        }

        self.current_customers += count;
        println!("Admitted {} customers to {}", count, self.name);
        Ok(())
    }

    // Method to get current status
    pub fn status(&self) -> String {
        format!(
            "{}: {} customers (Capacity: {}), {}",
            self.name,
            self.current_customers,
            self.capacity,
            if self.is_open { "Open" } else { "Closed" }
        )
    }

    // Method to serve customers (reduces customer count)
 
     fn serve_customers(&mut self, count: u32) -> Result<(), String> {
        if count > self.current_customers {
            return Err("Not enough customers".to_string());
        }
        self.current_customers -= count;
        println!("Served {} customers at {}", count, self.name);
        Ok(())
    }
}

// Define a struct to represent a Customer 
// (Note: this is not a method of Restaurant) 
pub fn r3() {
    println!("Hello from r3 inside lib!");
    red();
}
