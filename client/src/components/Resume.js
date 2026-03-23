import '../styles/resume.css'; 

function Resume() {
    
    const RESUME_PDF_PATH = "/resume/202344006_송윤빈_자기소개서.pdf";
    return (
        <section id="resume" className="section section-gray">
            <div className="container">
                
                <div className="resume-content-wrapper"> 
                    <h2 className="section-title">Resume</h2>
                    
                    <div className="resume-list"> 
                        <div className="resume-item resume-single-column">
                            <h3 className="resume-heading">자기소개</h3>
                            <div className="resume-content-box">
                                <p className="resume-desc">
                                    저는 어릴 적부터 세심함과 꼼꼼함을 기르기 위해 노력해왔습니다. 원래 덤벙대는 성향이 있어 어렸을때는 학교에 챙겨가야 할 준비물을 자주 잊거나 알림장에 적었던 내용도 놓치곤 했습니다. 이러한 저의 모습을 보신 부모님께서 지속적으로 지적하고 도와주셨습니다. 그리고 저도 그런 나쁜 습관을 고치기 위해 한 번 볼 것을 두 번 보고, 깜빡할 것 같은 내용은 어딘가에 메모를 하는 등 노력을 기울였습니다. 이러한 노력 끝에 꼼꼼함은 저의 특성이 되었습니다. 이런 성향은 일상생활에서 높은 성과를 이루는 데 큰 도움이 되었습니다. 대학교에 진학해서도 수업시간에 코드를 작성할때, 무언가 빠트리지는 않았는지 코드를 찬찬히 확인해가며 작업하는것은 매우 도움이 되었습니다. 나아가 이 회사에 취업한 후에도 저의 이런 꼼꼼한 성격은 직무를 수행할 때 많은 도움이 될 것이라고 생각합니다.
                                </p>
                            </div>
                        </div>
                        
                        <div className="resume-item resume-single-column">
                            <h3 className="resume-heading">성격의 장단점</h3>
                            <div className="resume-content-box">
                                <p className="resume-desc">
                                    제가 가진 성격적 장점 중 하나는 친절함입니다. 저는 사람들에게 친절하게 잘 대하며, 이러한 성향은 예전에 아르바이트를 했을 때 강점으로 발휘되었습니다. 손님들을 응대하는 과정에서 밝고 정중한 태도를 유지하려 노력했고 실제로 손님들로부터 친절하다는 칭찬을 받은 경험이 있습니다. 저의 이런 성향은 다른 팀원들과 소통하고, 고객을 응대하는 업무에 도움이 된다고 생각합니다. 고객 만족도를 높이는 동시에 팀원들과도 원활한 소통을 이어가며 협업에 긍정적인 영향을 줄 수 있다고 생각합니다. 반면, 한편으로 갖고 있는 단점 중 하나는 조금 내성적인 편이었다는 것입니다. 어려서부터 내성적인 성격이었지만 이러한 성격을 개선하기 위해 대학 생활을 하면서 동아리에 참여하고 다양한 교내활동을 하며 외향적인 면을 기르기 위해 노력했습니다. 그 결과, 현재는 과거에 비해 많이 활발해지고 밝아졌으며 타인과 소통하는 데 자신감을 갖게 되었습니다.
                                </p>
                            </div>
                        </div>
                        <div className="resume-item resume-single-column resume-goal">
                            <h3 className="resume-heading">성장과정</h3>
                            <div className="resume-content-box">
                                <p className="resume-desc">
                                    저는 학창시절 주로 혼자 공부하며 과제를 해왔지만 3년동안 대학을 다니며 여러 차례 팀 프로젝트를 경험하며 협업의 중요성을 배웠습니다. 그리고 이러한 경험에서 팀워크를 어떻게 형성하는지와 다수의 의견을 원만하게 합칠 수 있는 방법을 배울 수 있었습니다. 특히 대학교 2학년때 수행했던 팀 프로젝트가 가장 기억에 남습니다. 해당 프로젝트는 팀을 구성하여 서로의 파트를 맡고, 그에 맞춰 매주 진척사항을 발표하는 방식으로 진행되었으며 한 학기동안 이러한 프로젝트를 세 개 이상을 병행해야 했습니다. 그 과정중에서 팀원들과 의견이 맞지 않는 부분과 약간의 갈등이 있었습니다. 저는 이러한 상황에서 갈등을 회피하기보다 정기적인 회의 일정을 정해 조장의 의견을 잘 받아들이고 다른 팀원들과도 끊임없이 소통하고 원만하게 풀어가려 노력했습니다. 각자의 입장을 존중하면서도 프로젝트의 목표에 맞는 방향으로 합의점을 만들고자 다같이 노력하였습니다. 그 결과 프로젝트는 계획했던 부분까지 완성해낼 수 있었고 팀원들과도 더욱 돈독해졌습니다. 이 경험을 통해 원활한 소통과 배려를 바탕으로 한 협업이 성과를 만들어낸다는 것을 직접 체감할 수 있었습니다.
                                </p>
                            </div>
                        </div>

                        <div className="resume-item resume-single-column resume-goal">
                            <h3 className="resume-heading">지원동기 및 입사 후 포부</h3>
                            <div className="resume-content-box">
                                <p className="resume-desc">
                                    저는 사람들의 니즈를 빠르게 파악하고 친절하게 응대하기 위해 꾸준히 노력해왔습니다. 아르바이트 경험에서도 고객의 요구와 불편함을 먼저 이해하고 해결책을 제시하려는 태도로 좋은 평가를 받을 수 있었으며, 이 과정에서 단순히 요청에 응답하는 것을 넘어 ‘사용자가 어떤 생각을 하고 있으며 무엇을 기대하는가’를 고민하는 습관을 갖게 되었습니다. 이러한 경험은 서비스를 제공하는 사람의 관점보다 사용자의 체감 경험이 더욱 중요하다는 점을 깨닫게 했고, 자연스럽게 사용자 중심 사고가 요구되는 프론트엔드 개발에 흥미를 갖는 계기가 되었습니다. 프론트엔드는 화면 구성뿐 아니라 사용자 경험, 디자이너와의 협업, 기획 의도 이해 등 다양한 관점이 연결된 직무이기에 제 경험이 잘 활용될 수 있다고 생각합니다. 입사 후에는 이러한 소통 능력과 꼼꼼함을 바탕으로 사용자, 디자이너, 동료 개발자와 긴밀히 협력하여 완성도 높은 화면과 기능을 구현하는 개발자로 성장하겠습니다. 또한 빠르게 변화하는 기술 환경에 맞춰 지속적인 학습을 이어가며 팀에 신뢰를 주는 구성원이 되겠습니다.
                                </p>
                            </div>
                        </div>
                        
                    </div>

                    <div className="resume-button-area">
                        <a 
                            href={RESUME_PDF_PATH} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="print-resume-btn-link"
                        >
                            <button className="print-resume-btn">
                                📄 이력서 출력 / PDF 저장
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Resume;