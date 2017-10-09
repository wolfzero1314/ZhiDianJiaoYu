

import React from "react";

import style from "./common.css";

import banner from "../../images/banner.png";
import kaijuan1 from "../../images/kaijuan1.png";
import kaijuan2 from "../../images/kaijuan2.png";
import kaijuan3 from "../../images/kaijuan3.png";
import kaijuan4 from "../../images/kaijuan4.png";
import fengexian from "../../images/fengexian_03.png";
import course1 from "../../images/course_01.png";
import course2 from "../../images/course_02.png";
import course3 from "../../images/course_03.png";
import studyway1 from "../../images/studyway_01.png";
import studyway2 from "../../images/studyway_02.png";
import studyway3 from "../../images/studyway_03.png";
import studyway4 from "../../images/studyway_04.png";
import studyway5 from "../../images/studyway_05.png";

class MainPage extends React.Component{
    render(){
        return (
            <div className="wrapper">
                <Banner/>
                <ZhidianPlanIntroduction/>
                <Suitpeople/>
                <WhychooseZhidian/>
                <Studyway/>
                <Solveproblem/>
            </div>
        )
    }
}

//顶部banner
class Banner extends React.Component{
    render(){
        return(
            <div className="banner">
                <img src={banner} alt=""/>
            </div>
        )
    }
}

//分割线
class Cutline extends React.Component{
    render(){
        return(
            <div className="cutline_horizontal">
                <span className="circle"></span>
                <span className="centerline"></span>
                <span className="circle"></span>
            </div>
        )
    }
}

//什么是职点开卷计划
class ZhidianPlanIntroduction extends React.Component{
    render(){
        return(
            <div className="zhidian_plan">
                <h2>什么是<span className="everyhead_title"> 职点开卷计划？</span></h2>
                <Cutline/>
                <div className="zhidian_plan_induction">
                    <p>职点开卷计划，聚焦非985/211院校大学生，针对求职与试用两个关键阶段，助你成功斩获offer、轻松胜任职位。</p>
                    <p>职点课程，从生涯规划、求职能力与技巧、职位基础知识三方面，快速提升双非院校大学生求职竞争力和职位胜任力。</p>
                    <p>职位新人指南，选取过往5年最热门的12大职位，绘制精准职位画像，将概念模糊的职位3D呈现，助职位新人精准择业，快速上手。</p>
                    <p>职点讲师，汇聚名企HR面试官，《非你莫属》人力资源专家团成员关麟凤加盟。官方解密面试常用套路、考点、陷阱。这是属于你的一场“开卷考试”。</p>
                </div>
                <div className="zhidian_plan_pic">
                    <div>
                        <img src={kaijuan1} alt=""/>
                        <p>Offer+胜任</p>
                    </div>
                    <div>
                        <img src={kaijuan2} alt=""/>
                        <p>面试官亲授</p>
                    </div>
                    <div>
                        <img src={kaijuan3} alt=""/>
                        <p>Online <br/>职点课程学习</p>
                    </div>
                    <div>
                        <img src={kaijuan4} alt=""/>
                        <p>Hot <br/>职位新人指南</p>
                    </div>
                </div>
            </div>
        )
    }
}

//适合什么人群学习
class Suitpeople extends React.Component{
    render(){
        return(
            <div className="suit_people">
                <h2>适合什么<span className="everyhead_title"> 人群学习？</span></h2>
                <Cutline/>
                <div className="cutline_vertical">
                    <img src={fengexian} alt=""/>
                    <div className="suit_1 suit_condition">
                        <p>有职业理想</p>
                        <p>希望证明并实现自我价值的同学。</p>
                    </div>
                    <div className="suit_2 suit_condition">
                        <p>有明确目标职位，但缺少相关经验</p>
                        <p>希望深度认知职位的同学。</p>
                    </div>
                    <div className="suit_3 suit_condition">
                        <p>无明确目标职位</p>
                        <p>希望全面了解各职位后确定目标的同学。</p>
                    </div>
                    <div className="suit_4 suit_condition">
                        <p>求职时间紧迫</p>
                        <p>希望快速提升求职力的同学。</p>
                    </div>
                    <div className="suit_5 suit_condition">
                        <p>已拿到全职或实习</p>
                        <p>Offer，希望快速上手工作的同学。</p>
                    </div>
                </div>
            </div>
        )
    }
}

//为什么选择职点
class WhychooseZhidian extends React.Component{
    render(){
        return(
            <div className="why_is_zhidian">
                <h2>为什么<span className="everyhead_title"> 选择职点？</span></h2>
                <Cutline/>
                <h3>3大课程亮点</h3>
                <div className="course_1 clearfix">
                    <div className="img_vertical">
                        <img src={course1} alt=""/>
                    </div>
                    <div className="fr">
                        <div className="course_head_title_1">
                            <h3>独一份</h3>
                        </div>
                        <div className="text_left">
                            <p>(1)开卷考试--面试官企业真题讲解。</p>
                            <p>(2)职位画像：打破想象，了解真实职位，精准就业。</p>
                            <p>(3)聚焦双非毕业生的职业生涯。</p>
                            <p>(4)实战案例，易于复制，快速上手。</p>
                        </div>
                    </div>
                </div>
                <div className="course_2 clearfix">
                    <div className="img_vertical_right">
                        <img src={course2} alt=""/>
                    </div>
                    <div className="fl">
                        <div className="course_head_title_2">
                            <h3>职位画像</h3>
                        </div>
                        <div className="text_left">
                            <p>(1)资深行业人亲授，真实一手资料。</p>
                            <p>(2)详述职位的工作状态、用人标准、未来发展、面试前应做的准备，和如何快速上手工作。</p>
                            <p>(3)精准择业的同时，提升个人求职胜任力。</p>
                        </div>
                    </div>
                </div>
                <div className="course_3 clearfix">
                    <div className="img_vertical">
                        <img src={course3} alt=""/>
                    </div>
                    <div className="fr">
                        <div className="course_head_title_3">
                            <h3>面试官讲师讲面试</h3>
                        </div>
                        <div className="text_left">
                            <p>(1)多年应届生面试经验，HRBP以上职位，了解学生、了解职位。</p>
                            <p>(2)解密面试官常用套路。</p>
                            <p>(3)以实战角度讲解求职。</p>
                            <p>(4)教你在考官的角度思考问题。</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

//学习路径
class Studyway extends React.Component{
    render(){
        return(
            <div className="study_way">
                <h2><span className="everyhead_title">学习路径</span></h2>
                <Cutline/>
                <div className="study_way_content">
                    <div className="study_way_content_center">
                        <img src={studyway1} alt=""/>
                    </div>

                    <div className="study_way_content_lefttop">
                        <div className="study_way_content_lefttop_title">
                            <img src={studyway2} alt=""/>
                            <span>人才测评</span>
                        </div>
                        <div className="text_left">
                            <p>(1)分阶段完成不同的人才测评。</p>
                            <p>(2)人才性格测评、职业价值观测评。</p>
                            <p>(3)正确解读测评的方法。</p>
                        </div>
                    </div>

                    <div className="study_way_content_righttop">
                        <div className="study_way_content_righttop_title">
                            <img src={studyway3} alt=""/>
                            <span>生涯规划</span>
                        </div>
                        <div className="text_left">
                            <p>(1)完成测评和自我定位。</p>
                            <p>(2)认知目标行业，确定相应行业职位。</p>
                            <p>(3)基于对行业或职位的认知，合理制定生涯规划。</p>
                        </div>
                    </div>
                    <div className="study_way_content_leftbottom">
                        <div className="study_way_content_leftbottom_title">
                            <img src={studyway5} alt=""/>
                            <span>职位认知</span>
                        </div>
                        <div className="text_left">
                            <p>(1)职位人才素质模型。</p>
                            <p>(2)职位工作状态。</p>
                            <p>(3)职位发展方向。</p>
                            <p>(4)相应求职准备方式。</p>
                            <p>(5)新人上手指南。</p>
                        </div>
                    </div>
                    <div className="study_way_content_rightbottom">
                        <div className="study_way_content_rightbottom_title">
                            <img src={studyway4} alt=""/>
                            <span>求职技巧</span>
                        </div>
                        <div className="text_left">
                            <p>(1)了解面试官的思考方式，应对方法训练。</p>
                            <p>(2)面试形式。</p>
                            <p>(3)常见陷阱套路解析。</p>
                            <p>(4)大学生普遍问题。</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

//解决什么问题
class Solveproblem extends React.Component{

    render(){
        return(
            <div className="solve_problem">
                <h2><span className="everyhead_title">解决</span> 什么问题</h2>
                <Cutline/>
                <h3>起点关乎职业生涯</h3>
                <div className="solve_problem_content" id="solve_problem_content">
                    <div className="fl" style={{width:"50%"}}>
                        <div className="solve_problem_content_lefttop" >
                            <div className="solve_problem_content_lefttophead">
                                <header>省时</header>
                                <p>节省时间&lt;10小时</p>
                            </div>
                            <div style={{maxWidth:"366px",position:"absolute",left:"50%",marginLeft:"-183px"}}>
                                <div className="solve_problem_content_lefttopcontent">
                                    <p>（1）为心怀职业理想的学生，节省规划和准备时间。</p>
                                    <p>（2）为身陷面经和题海的学生，节省总结和提炼的时间。</p>
                                    <p>（3）为时间紧迫的学生，抢回落后的时间。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="fr" style={{width:"50%",paddingBottom:"-25px"}}>
                        <div className="solve_problem_content_righttop">
                            <div className="solve_problem_content_righttophead">
                                <header>择业</header>
                                <p>实现自我价值的职业选择</p>
                            </div>
                            <div style={{maxWidth:"388px",position:"absolute",left:"50%",marginLeft:"-194px"}}>
                                <div className="solve_problem_content_righttopcontent">
                                    <p>（1）择己所爱、择己所长、择市所需。</p>
                                    <p>（2）入职活少钱多的朝阳行业工作。</p>
                                    <p>（3）充足求职准备，明确能力提升项。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                   <div className="fl" style={{width:"50%"}}>
                       <div className="solve_problem_content_leftbottom">
                           <div className="solve_problem_content_leftbottomhead">
                               <header>信心</header>
                               <p>提升竞争名校生的把握</p>
                           </div>
                           <div style={{maxWidth:"300px",position:"absolute",left:"50%",marginLeft:"-150px"}}>
                               <div className="solve_problem_content_leftbottomcontent">
                                   <p>（1）双非生职业规划--规划师</p>
                                   <p>（2）知己知彼，套路面试官</p>
                                   <p>（3）面试技巧提升竞争力</p>
                                   <p>（4）面试时选项，职点是答案</p>
                               </div>
                           </div>
                       </div>
                   </div>
                    <div className="fr" style={{width:"50%"}}>
                        <div className="solve_problem_content_rightbottom">
                            <div className="solve_problem_content_rightbottomhead">
                                <header>岗位</header>
                                <p>职位猜测&nbsp;&nbsp;认知</p>
                            </div>
                            <div style={{maxWidth:"234px",position:"absolute",left:"50%",marginLeft:"-117px"}}>
                                <div className="solve_problem_content_rightbottomcontent">
                                    <p>（1）职位人才素质模型</p>
                                    <p>（2）职位工作状态</p>
                                    <p>（3）职位发展方向</p>
                                    <p>（4）相应求职准备方式</p>
                                    <p>（5）新人上手指南</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainPage;