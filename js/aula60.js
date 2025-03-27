function recusiva(max)
{
    if(max >= 10) return;
    max++;
    console.log(max);
    recusiva(max);
}

recusiva(0); 