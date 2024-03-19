import { StatusBar } from 'expo-status-bar';
import React , { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Input, NativeBaseProvider, Button, Icon, Box, Image, AspectRatio } from 'native-base';
import { FontAwesome5, MaterialCommunityIcons, Entypo  } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { alignContent, flex, flexDirection, width } from 'styled-system';




function Signup() {
    const navigation = useNavigation();
  
    const [fullname, setFulname] = useState('');
    const [address, setAddress] = useState('');
    const [selectedGender, setSelectedGender] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setrePassword] = useState('');
    const [submit, setSubmit] = useState(false);
    const [phone_number, setPhonenumber] = useState('');

    const handleGenderSelect = (gender) => {
    
    setSelectedGender(gender);
    }

    const handleRegister = () => {
      handleCheckInput();
      
    };
    const handleCheckInput = () => {

      if (validateEmail()) {
       
          setSubmit(true);
         
      } else {
          // email is not valid or does not end with "@gmail.com"
          setSubmit(false);
          alert('Email chưa đúng định dạng');
      }

      if(validatePassword()){
        setSubmit(true);
      }else{
        setSubmit(false);
        alert('Xác nhận mật khẩu chưa chính xác');
      }
  };


    const validateEmail = () => {
      // Sử dụng biểu thức chính quy để kiểm tra cấu trúc của email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
    const validatePassword = () => {
      // Kiểm tra mật khẩu và mật khẩu xác nhận có trùng khớp nhau hay không
      return password === repassword;
    }
  return (
    <View style={styles.container}>
      <View style={styles.Middle}>
        <Text style={styles.LoginText}>Sign up</Text>
      </View>
      

      {/* Username or Email Input Field */}
      <View style={styles.buttonStyle}>
        
        <View style={styles.emailInput}>
          <Input
            value={fullname}
            onChangeText={(text) => setFulname(text)}
            InputLeftElement={
              <Icon
              
                as={<FontAwesome5 name="user-alt" />}
                size="sm"
                m={2}
                _light={{
                  color: "#336666",
                }}
                _dark={{
                  color: "gray.300",
                }}
              />
            }
            variant="outline"
            placeholder="Full name"
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}

          />
        </View>
      </View>
      {/* address*/}
      <View style={styles.buttonStyleX}>
        
        <View style={styles.emailInput}>
          <Input
          value={address}
          onChangeText={(text) => setAddress(text)}
            InputLeftElement={
              <Icon
              
                as={<Entypo name="address" />}
                size="sm"
                m={2}
                _light={{
                  color: "#336666",
                }}
                _dark={{
                  color: "gray.300",
                }}
              />
            }
            variant="outline"
            placeholder="Address"
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}

          />
        </View>
      </View>
          
    {/*phonenumber */} 
    <View style={styles.buttonStyleX}>
        
        <View style={styles.emailInput}>
          <Input
          value={phone_number}
          onChangeText={(text) => setPhonenumber(text)}
            InputLeftElement={
              <Icon
              
                as={<Entypo name="phone" />}
                size="sm"
                m={2}
                _light={{
                  color: "#336666",
                }}
                _dark={{
                  color: "gray.300",
                }}
              />
            }
            variant="outline"
            placeholder="Phone number"
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}

          />
        </View>
      </View>      
    {/* Gender */}
    <View style={styles.buttonStyleX}>
      <Text style={styles.text2}>Select your gender:</Text>
      <Text style={styles.text2}>Male        <TouchableOpacity
        style={[styles.button, selectedGender === 'male' && styles.selectedButton]}
        onPress={() => handleGenderSelect('male')}
      > 
      </TouchableOpacity> </Text>
      
      <Text style={styles.text2}>Female    <TouchableOpacity
        style={[styles.button, selectedGender === 'female' && styles.selectedButton]}
        onPress={() => handleGenderSelect('female')}
      >
      </TouchableOpacity></Text>
      
      
    </View>
      {/* Username or Email Input Field */}
      <View style={styles.buttonStyleX}>
        
        <View style={styles.emailInput}>
          <Input
            value={email}
            onChangeText={(text) => setEmail(text)} 
            InputLeftElement={
              <Icon
                as={<MaterialCommunityIcons name="email" />}
                size="sm"
                m={2}
                _light={{
                  color: "#336666",
                }}
                _dark={{
                  color: "gray.300",
                }}
              />
            }
            variant="outline"
            placeholder="Email"
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}

          />
        </View>
      </View>
            
      {/* Password Input Field */}
      <View style={styles.buttonStyleX}>
        
        <View style={styles.emailInput}>
          <Input
            value={password}
            onChangeText={(text) => setPassword(text)}
            InputLeftElement={
              <Icon
                as={<FontAwesome5 name="key" />}
                size="sm"
                m={2}
                _light={{
                  color: "#336666",
                }}
                _dark={{
                  color: "gray.300",
                }}
              />
            }
            variant="outline"
            secureTextEntry={true}
            placeholder="Password"
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}
          />
        </View>
      </View>

      {/* Password Input Field */}
      <View style={styles.buttonStyleX}>
        
        <View style={styles.emailInput}>
          <Input
            value={repassword}
            onChangeText={(text) => setrePassword(text)}
            InputLeftElement={
              <Icon
                as={<FontAwesome5 name="key" />}
                size="sm"
                m={2}
                _light={{
                  color: "#336666",
                }}
                _dark={{
                  color: "gray.300",
                }}
              />
            }
            variant="outline"
            secureTextEntry={true}
            placeholder="Confirm Password"
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}
          />
        </View>
      </View>

      {/* Button */}
      <View style={styles.buttonStyle}>
        <Button style={styles.buttonDesign} onPress={handleRegister}>
            REGISTER NOW
        </Button>
      </View>

      <View style={styles.text2}>
        <Text>Already have account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")} ><Text style={styles.signupText}> Login </Text></TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

export default () => {
  return (
    <NativeBaseProvider>
     
        <Signup />
      
    </NativeBaseProvider>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  LoginText: {
    marginTop:100,
    fontSize:30,
    fontWeight:'bold',
    color: "#336666",
    
  },
  Middle:{
    alignItems:'center',
    justifyContent:'center',
  },
  text2:{
    flexDirection:'row',
    justifyContent:'center',
    paddingTop:5,
    marginTop:10,
    
  },
  signupText:{
    fontWeight:'bold',
    color: "#336666",
    opacity: 1
  },
  emailField:{
    marginTop:30,
    marginLeft:15
  },
  emailInput:{
    marginTop:10,
    marginRight:5
  },
  buttonStyle:{
    marginTop:30,
    marginLeft:15,
    marginRight:15
  },
  buttonStyleX:{
    marginTop:12,
    marginLeft:15,
    marginRight:15
  },
  buttonDesign:{
    backgroundColor:'#336666'
  },
  lineStyle:{
    flexDirection:'row',
    marginTop:30,
    marginLeft:15,
    marginRight:15,
    alignItems:'center'
  },
  imageStyle:{
    width:80,
    height:80,
    marginLeft:20,
  },
  buttonGender:{
    marginTop:12,
    marginLeft:15,
    marginRight:450,
    backgroundColor: "#336666"
  },
  text:{
    opacity: 0.6
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  button: {
    width: 20, // Đảm bảo nút có kích thước vuông
    height: 20, // Đảm bảo nút có kích thước vuông
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    // marginBottom: 1,
    borderRadius: 75, // Đặt bán kính là 1 nửa của chiều rộng/cao để tạo hình dạng tròn
  },
  selectedButton: {
    backgroundColor: '#336666', // Color for selected button
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  selectedGenderText: {
    marginTop: 20,
    fontSize: 16,
  },
});
