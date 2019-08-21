/**
 * Created by lenovo on 2019/4/10.
 */
window.onload = function(){
    waterFlow("container", "box");

}
function waterFlow(parent, chirld){
    var wparent = document.getElementById(parent);//��ȡ����div, ���⼶����
    var allArr = getAllChirld(wparent,chirld);//��ȡ�����е�classΪbox������div
    var wscreenWidth = document.documentElement.clientWidth;//��ȡ��Ļ���
    var wchirldWidth = wparent.getElementsByTagName("*");//��ȡ���еı�ǩ
    var num = Math.floor(wscreenWidth/wchirldWidth[0].offsetWidth);//����һ��Math�㷨, Ŀ���ǽ�С��ת��Ϊ����,
    // �Ӷ�����֪��ÿ��������ɼ���ͼƬ
    wparent.style.cssText = 'width:'+wchirldWidth[0].offsetWidth*num+'px;margin:0 auto';//�̶�ÿ�аڷŸ��� ���������ұ߾�
    //���ÿ�е���С�߶�
    getMinHeightOfCols(allArr, num);
}
function getAllChirld(parent,classname){
    //��ȡ���еı�ǩ
    var wchirld = parent.getElementsByTagName("*");
    //��������
    var chirldArr = [];
    //����wchirld, ������className����classname(�������Ĳ���)��ͬ�ı�ǩ��������chirldArr��
    for(var i = 0; i<wchirld.length; i++){
        if(wchirld[i].className==classname){
            //��Ϊ��λpush����û�Ž�ȥһ��, ��������������һ��
            chirldArr.push(wchirld[i]);
        }
    }
    //���ظ�����
    return chirldArr;
}
function getMinHeightOfCols(chirdArr, num){
    //��������, ����ʢ��ÿһ�еĸ߶�
    var onlyOneColsArr = [];
    for(var i = 0; i<chirdArr.length; i++){

        if(i<num){
            //numΪ�������Ĳ���, ��Ϊÿ�з�ͼƬ������, �˲����Ŀ����Ϊ�˽���һ��ÿ��ͼƬ�ĸ߶ȱ������������������
            onlyOneColsArr[i]=chirdArr[i].offsetHeight;
        } else {
            //������ÿ�д�ŵ�ͼƬ����ʱ����÷���, Math.min.apply���������Ϊ�˵õ������е���Сֵ
            var minHeightOfCols = Math.min.apply(null, onlyOneColsArr);
            //�˷�����Ŀ����Ϊ�˵õ���С�߶�ͼƬ���±�, Ҳ������ÿ�еĵڼ���, ���巽��������
            var minHeightOfindex = getminIndex(onlyOneColsArr, minHeightOfCols);
            //���岼�ַ�ʽΪ���Բ���
            chirdArr[i].style.position = "absolute";
            //�õ���һ��ͼƬӦ�ŵĸ߶�
            chirdArr[i].style.top = minHeightOfCols + "px";
            //�õ���һ��ͼƬӦ�����Ǹ�λ��
            chirdArr[i].style.left = chirdArr[minHeightOfindex].offsetLeft + "px";
            //������ͼƬ�߶���ӵõ�һ���µĸ߶�����������һ�εļ���
            onlyOneColsArr[minHeightOfindex] += chirdArr[i].offsetHeight;
        }
    }

}
//�˷�����Ϊ�˽�����С�߶��±��ȷ��
function getminIndex(onlyOneColsArr, min){
    //�����������ĸ߶�����
    for(var i in onlyOneColsArr){
        //����߶ȵ�����С�߶�, ����i��Ϊ��ͼƬ�±�
        if(onlyOneColsArr[i] == min){
            return i;
        }
    }
}