import React, { Component } from 'react';
import {
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    FlatList,
    ScrollView,
    Text,
    TouchableHighlight,
} from 'react-native';

class Main extends Component{
    constructor(props){
        super(props);
       
        this.state = {
            BackgroundImage:  require('../imgs/background.png'),
            ImageData : [
                {
                    img: require('../imgs/background.png'),
                    note: 'Ngọc Trinh',
                    date: '27/03/2018',
                    location: 'Quảng Bình',
                },
                {
                    img: require('../imgs/photo/avatar.png'),
                    note: 'Ngọc Trinh',
                    date: '27/03/2018',
                    location: 'Quảng Bình',
                },
                {
                    img: require('../imgs/photo/hot-girl-1.png'),
                    note: 'Thanh Hằng',
                    date: '27/03/2018',
                    location: 'Sài Gòn',
                },
                {
                    img: require('../imgs/photo/hot-girl-2.png'),
                    note: 'Võ Hoàng Yến',
                    date: '27/03/2018',
                    location: 'Đà Nẵng',
                },
                {
                    img: require('../imgs/photo/hot-girl-3.png'),
                    note: 'Angela Phương Trinh',
                    date: '27/03/2018',
                    location: 'Cần Thơ',
                },
                {
                    img: require('../imgs/photo/hot-girl-4.png'),
                    note: 'Vũ Hà Anh',
                    date: '27/03/2018',
                    location: 'Quảng Bình',
                },
                {
                    img: require('../imgs/photo/hot-girl-5.png'),
                    note: 'Phạm Hương',
                    date: '27/03/2018',
                    location: 'Hà Nội',
                },
                {
                    img: require('../imgs/photo/hot-girl-6.png'),
                    note: 'Kha Mỹ Vân',
                    date: '27/03/2018',
                    location: 'Quảng Bình',
                },
                {
                    img: require('../imgs/photo/hot-girl-7.png'),
                    note: 'Mai Phương Thúy',
                    date: '27/03/2018',
                    location: 'Cao Bằng',
                },
                {
                    img: require('../imgs/photo/hot-girl-8.png'),
                    note: 'Elly Trần',
                    date: '27/03/2018',
                    location: 'Sơn La',
                },
                {
                    img: require('../imgs/photo/hot-girl-9.png'),
                    note: 'Midu',
                    date: '27/03/2018',
                    location: 'Quảng Trị',
                },
        
                {
                    img: require('../imgs/photo/hot-girl-10.png'),
                    note: 'Ngọc Quyên',
                    date: '27/03/2018',
                    location: 'Quảng Bình',
                },
                {
                    img: require('../imgs/photo/hot-girl-11.jpg'),
                    note: 'Ngọc Quyên',
                    date: '27/03/2018',
                    location: 'Quảng Bình',
                },
                {
                    img: require('../imgs/photo/hot-girl-12.jpg'),
                    note: 'Ngọc Quyên',
                    date: '27/03/2018',
                    location: 'Quảng Bình',
                },
                {
                    img: require('../imgs/photo/hot-girl-13.jpg'),
                    note: 'Ngọc Quyên',
                    date: '27/03/2018',
                    location: 'Quảng Bình',
                },
                {
                    img: require('../imgs/photo/hot-girl-14.jpg'),
                    note: 'Ngọc Quyên',
                    date: '27/03/2018',
                    location: 'Quảng Bình',
                },
                {
                    img: require('../imgs/photo/hot-girl-15.jpg'),
                    note: 'Ngọc Quyên',
                    date: '27/03/2018',
                    location: 'Quảng Bình',
                },
                {
                    img: require('../imgs/photo/hot-girl-16.jpg'),
                    note: 'Ngọc Quyên',
                    date: '27/03/2018',
                    location: 'Quảng Bình',
                },
                {
                    img: require('../imgs/photo/hot-girl-17.jpg'),
                    note: 'Ngọc Quyên',
                    date: '27/03/2018',
                    location: 'Quảng Bình',
                },
                {
                    img: require('../imgs/photo/hot-girl-18.jpg'),
                    note: 'Ngọc Quyên',
                    date: '27/03/2018',
                    location: 'Quảng Bình',
                },
                {
                    img: require('../imgs/photo/hot-girl-19.jpg'),
                    note: 'Ngọc Quyên',
                    date: '27/03/2018',
                    location: 'Quảng Bình',
                },
                {
                    img: require('../imgs/photo/hot-girl-20.jpg'),
                    note: 'Ngọc Quyên',
                    date: '27/03/2018',
                    location: 'Quảng Bình',
                },
                {
                    img: require('../imgs/photo/hot-girl-21.jpg'),
                    note: 'Ngọc Quyên',
                    date: '27/03/2018',
                    location: 'Quảng Bình',
                },
                {
                    img: require('../imgs/photo/hot-girl-22.jpg'),
                    note: 'Ngọc Quyên',
                    date: '27/03/2018',
                    location: 'Quảng Bình',
                },
                {
                    img: require('../imgs/photo/hot-girl-23.jpg'),
                    note: 'Ngọc Quyên',
                    date: '27/03/2018',
                    location: 'Quảng Bình',
                },
                {
                    img: require('../imgs/photo/hot-girl-24.jpg'),
                    note: 'Ngọc Quyên',
                    date: '27/03/2018',
                    location: 'Quảng Bình',
                },
                {
                    img: require('../imgs/photo/hot-girl-25.jpg'),
                    note: 'Ngọc Quyên',
                    date: '27/03/2018',
                    location: 'Quảng Bình',
                },
                {
                    img: require('../imgs/photo/hot-girl-26.jpg'),
                    note: 'Ngọc Quyên',
                    date: '27/03/2018',
                    location: 'Quảng Bình',
                },
                {
                    img: require('../imgs/photo/hot-girl-27.jpg'),
                    note: 'Ngọc Quyên',
                    date: '27/03/2018',
                    location: 'Quảng Bình',
                },
            ]
        }
    }
    renderItem = () =>  {
            let slideView =  this.state.ImageData.map((item,index)=>{
                return(
                <TouchableOpacity onPress={()=>this.setState({BackgroundImage:item.img})}  key={index} style={{ flex: 1,padding: 3, flexDirection: "row", flexWrap: "wrap" }}>
                <Image style={{paddingBottom:0, width: 50, height: 60 }}
                    source={item.img}
                />
                </TouchableOpacity>
                )
                
            });  
            return slideView;
    
    }
    
    render(){
        const { containerStyle,imgStyle } = styles;
        const url =this.state.BackgroundImage;
        const defaultUrl = require('../imgs/background.png');
        const urlDel = require('../imgs/closebutton.png');
        const urlNightmode = require('../imgs/nightmodeicon.png');
        const urlFlash = require('../imgs/flashoff.png');
        const urlRectangl = require('../imgs/rectangl5.png');
        const urlGalleryicon = require('../imgs/galleryicon.png');
        const urlTrigger = require('../imgs/trigger.png');
        const urlGroup = require('../imgs/group.png');
        return(
            <View style={containerStyle}>
                <ImageBackground style={imgStyle} source={url} >
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <TouchableOpacity onPress={()=>this.setState({BackgroundImage:defaultUrl})}  style={{left: 10, top: 15 }} >
                            <Image  source={urlDel} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{right: 55, top: 15 }} >
                         <Image  source={urlNightmode} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{position: 'absolute', right: 20, top: 15 }}>
                        <Image   source={urlFlash} />
                        </TouchableOpacity>
                        </View>
                        <View style={{flex: 1,marginTop: -8}}>
                        </View>
                        <View style={{flex: 1}}>
                        </View>
                        <View style={{flex: 1, alignItems: 'center'}}>
                        <Image source={urlRectangl} />
                        <ScrollView  showsHorizontalScrollIndicator={false} horizontal={true}
                         style={{flex:1,padding: 0, marginTop: 8}} >
                         {this.renderItem()}
                        </ScrollView>
                           <View style={{flex:1,flexDirection:'row',alignItems:'center',marginTop: -30}}>
                                <TouchableOpacity style={{flex:1,left: 10 }} >
                                    <Image  source={urlGalleryicon} />
                                </TouchableOpacity>
                                <TouchableOpacity style={{flex:1,alignItems:'center'}} >
                                <Image  source={urlTrigger} />
                                </TouchableOpacity>
                                <TouchableOpacity style={{flex:1,right: 10,alignItems: 'flex-end' }}>
                                <Image   source={urlGroup} />
                                </TouchableOpacity>
                        </View>
                        <Text style={{marginBottom:5,color: 'white'}}>Hold for video, tap for photo</Text>
                        </View>
                       
                        
                        
                </ImageBackground>
            </View>
        )
    }
}

const styles = {
    containerStyle: {
        flex: 1,
    },
    imgStyle: {
        flex: 1,
        width: '100%',
        height: '100%',
    }
}
export default Main;