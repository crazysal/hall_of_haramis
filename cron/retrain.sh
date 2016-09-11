rm /tmp/neg.txt
mysql -uroot -proot competetions -e ' select tweet_text into outfile "/tmp/neg.txt" from tweets where human_label="neg" and is_trainable=1 and DATE(created_at)=DATE(NOW());'

rm /home/ubuntu/code/sequoia-hack/current/neg_new.txt
cp /tmp/neg.txt /home/ubuntu/code/sequoia-hack/current/neg_new.txt



rm /tmp/pos.txt
mysql -uroot -proot competetions -e ' select tweet_texts into outfile "/tmp/pos.txt" from tweets where human_label="pos" and is_trainable=1 and DAT    E(created_at)=DATE(NOW());'
rm /home/ubuntu/code/sequoia-hack/current/pos_new.txt
cp /tmp/neg.txt /home/ubuntu/code/sequoia-hack/current/pos_new.txt

cd /home/ubuntu/code/sequoia-hack/current && nohup python training.py &
