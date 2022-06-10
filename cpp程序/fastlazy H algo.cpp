#include <bits/stdc++.h>
#define xh(i,a,b) for(register int (i)=(a);(i)<(b);++(i))
#define ll long long
using namespace std;

template <typename T>
T rd(T& x) {
	x = 0;
	bool f = 1;
	char c = getchar();
	while(c > '9' || c < '0') {
		f = c - '-';
		c = getchar();
	}
	while(c >= '0' && c <= '9') {
		x = x * 10 + c - '0';
		c = getchar();
	}
	x = f ? x : -x;
	return x;
}

inline ll pf(ll i) {
	return i * i;
}

const ll INF = 0xffffffff, N = 600;
bool e[N][N];
int n, sp[N][N], tot, ma, ans[N], fa[N], cnt, Ti;
ll vis[N], ec[N][N], ai, aj, mec, ei[N], a[N], q[N*N], maxq = -114514;
vector<ll>eo[N], bp, bv;
ll ni, nj;

int ff(int p) {
	if(fa[fa[p]] != fa[p])
		fa[p] = ff(fa[p]);
	return fa[p];
}

inline void link (int i, int j) {
	fa[ff(i)] = ff(j);
	return;
}

inline void bfs(int ori) {
	bp.clear();
	bv.clear();
	memset(vis, 0, sizeof(vis));
	bp.push_back(ori);
	vis[ori] = INF + 1;
	for(int t = 0; t < bp.size(); ++t) {
		xh(i, 0, eo[bp[t]].size())
		if(vis[eo[bp[t]][i]] == 0) {
			vis[eo[bp[t]][i]] = vis[bp[t]];
			sp[ori][eo[bp[t]][i]] = sp[ori][bp[t]] + 1;
			bv.push_back(bp[t] * INF + eo[bp[t]][i]);
			bp.push_back(eo[bp[t]][i]);
		} else if(sp[ori][eo[bp[t]][i]] == sp[ori][bp[t]] + 1) {
			bv.push_back(bp[t] * INF + eo[bp[t]][i]);
			vis[eo[bp[t]][i]] += vis[bp[t]] - 1;
		}
	}


	for(; !bv.empty(); bv.pop_back()) {
		ni = bv.back() / INF, nj = bv.back() % INF;
		vis[ni] += vis[nj] % INF;
		ec[ni][nj] += (vis[nj] % INF) * (vis[ni] / INF);
	}

	return;
}



int main() {
	printf("���ٱ�����");
	rd(Ti);
	printf("������");
	rd(n);
	freopen("cppData1.txt", "r", stdin);
	freopen("fg.txt", "w", stdout);
	xh(i, 0, n)
	xh(j, 0, n) {
		rd(e[i][j]);
		if(i == j)e[i][j] = 0;
		if(e[i][j]) {
			eo[i].push_back(j);
			++cnt;
		}
	}
	tot = cnt;
	//�����ڽӾ��� 

	for(; cnt > 0; --cnt) {
		memset(ei, 0, sizeof(ei));
		memset(a, 0, sizeof(a));
		mec = -1;
		xh(i, 0, n)
		fa[i] = i;
		//��ʼ��

		xh(i, 0, n)
		xh(j, 0, eo[i].size())
		link(i, eo[i][j]);
		//ʹ�ò��鼯������Ⱥ  

		xh(i, 0, n)
		xh(j, 0, n)
		if(e[i][j])
			if(ff(i) == ff(j)) {
				ei[fa[i]] += 2;
				a[fa[i]] += 2;
			} else {
				++a[fa[i]];
				++a[fa[j]];
			}
		//����ai��eii 

		xh(i, 0, n)
		if(a[i])
			q[tot - cnt] += (ll)ei[i] * (tot << 1) - pf(a[i]);
		//����q�ķ��� 

		if(q[tot - cnt] > maxq) {
			maxq = q[tot - cnt];
			ma = tot - cnt;
			xh(i, 0, n)
			ans[i] = fa[i];
		}
		//�������Ž� 

		if((tot - cnt) % Ti == 0) {
			memset(ec, 0, sizeof(ec));
			memset(sp, 0, sizeof(sp));
			xh(i, 0, n) bfs(i);
		}
		//����ʹ��bfs����߽��� 
		
		xh(i, 0, n)
		xh(j, 0, n) {
			if(mec < ec[i][j]) {
				ai = i;
				aj = j;
				mec = ec[i][j];
			}
		}
		//Ѱ�ұ߽������ı�

		ec[ai][aj] = 0;
		xh(i, 0, eo[ai].size())
		if(eo[ai][i] == aj) {
			eo[ai].erase(eo[ai].begin() + i);
			break;
		}
		//ɾ���˱� 

		printf("t%d q%lld\n", tot - cnt, q[tot - cnt]);
		//���������Ϣ 
	}

	printf("%d %lld\n\n", ma, maxq);
	xh(i, 0, n)
	printf("%d %d\n", i + 1, ans[i] + 1);
	//������Ž� 
	return 0;
}
