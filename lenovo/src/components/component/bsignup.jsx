import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Bsignup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    vendorType: '',
    username: '',
    email: '',
    phone: '',
    age: '',
    location: '',
    image: null,
    password: ''
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev, [name]: value
    }));
  };

  const handleVendorTypeChange = (value) => {
    setFormData((prev) => ({
      ...prev, vendorType: value
    }));
  };

  const handleImageChange = (e) => {
    setFormData((prev) => ({
      ...prev, image: e.target.files[0]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    for (const key in formData) {
      form.append(key, formData[key]);
    }

    try {
      const response = await fetch("http://localhost:8081/api/ved/blue", {
        method: "POST",
        body: form
      });
      const result = await response.json();
      console.log(result);
      
      // Store the vendorId in local storage
      if (result.vendorId) {
        localStorage.setItem('vendorId', result.vendorId);
        console.log('Vendor signed up successfully', result.vendorId);
      }

      navigate('/Loginmodal');
    } catch (error) {
      console.log(error.message);
    } finally {
      setFormData({
        vendorType: '',
        username: '',
        email: '',
        phone: '',
        age: '',
        location: '',
        image: null,
        password: ''
      });
    }
  };

  return (
    <div className="mx-auto max-w-md space-y-6 py-12">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Sign Up</h1>
        <p className="text-gray-500 dark:text-gray-400">Join our platform as a Photographer or Event Organizer.</p>
      </div>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <RadioGroup defaultValue={formData.vendorType} onValueChange={handleVendorTypeChange}>
          <div className="flex items-center justify-center gap-4">
            <Label
              className="flex cursor-pointer items-center space-x-3 rounded-md border border-gray-300 bg-white px-4 py-3 shadow-sm transition-colors hover:border-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600"
              htmlFor="photographer">
              <RadioGroupItem id="photographer" value="photographer" />
              <span className="text-base font-medium">I am a Photographer</span>
            </Label>
            <Label
              className="flex cursor-pointer items-center space-x-3 rounded-md border border-gray-300 bg-white px-4 py-3 shadow-sm transition-colors hover:border-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600"
              htmlFor="event-organizer">
              <RadioGroupItem id="event-organizer" value="event organizer" />
              <span className="text-base font-medium">I am an Event Organizer</span>
            </Label>
          </div>
        </RadioGroup>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" placeholder="Enter your username" name='username' value={formData.username} onChange={handleOnChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" name='email' placeholder="Enter your email" required value={formData.email} onChange={handleOnChange} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="contact">Contact Number</Label>
            <Input type="tel" id="contact" name='phone' placeholder="Enter your contact number" value={formData.phone} onChange={handleOnChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="age">Age</Label>
            <Input id="age" name='age' placeholder="Enter your age" required type="number" value={formData.age} onChange={handleOnChange} />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input id="location" name='location' placeholder="Enter your location" required value={formData.location} onChange={handleOnChange} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="image">Upload Image</Label>
          <Input id="image" name='image' type="file" onChange={handleImageChange} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" name='password' type="password" value={formData.password} onChange={handleOnChange} />
        </div>
        <p id="account" className='mt-6 ml-10'>Already have an account? <a href="/Loginmodal" className="text-pink-800">Login</a></p>
        <Button className="w-full" type="submit">
          Create Account
        </Button>
      </form>
    </div>
  );
}
